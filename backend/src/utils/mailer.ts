import nodemailer from "nodemailer";
import fs from "fs";
import ejs from "ejs";
import { htmlToText } from "html-to-text";
import juice from "juice";
import { __prod__ } from "../constants";

type Options = {
  template: string;
  templateVars: {
    [key: string]: string;
  };
  html?: string;
  text?: string;
  from?: string;
  to: string;
  subject: string;
};
// create reusable transporter object using the default SMTP transport
let smtp = nodemailer.createTransport({
  ...(__prod__ && { host: process.env.SMTP_HOST }),
  ...(!__prod__ && { service: "gmail" }),
  secure: __prod__, // true for 465, false for other ports
  port: parseInt(process.env.SMTP_PORT as string),
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD,
  },
});

export default (options: Options) => {
  // destructure template and template variables from the options parameter
  const { template: templateName, templateVars } = options;
  // path of the template
  const templatePath = `src/templates/email/${templateName}.html`;

  // check if templateName and templatePath  exist
  if (templateName && fs.existsSync(templatePath)) {
    const template = fs.readFileSync(templatePath, "utf-8"); // initialize template
    const html = ejs.render(template, templateVars); // Initialize mail html
    const text = htmlToText(html); // Initialize mail text
    options.html = juice(html); // pass the html to mailer options
    options.text = text; // pass the text to the mailer options
    options.from = "TechByte <notification.techbytesystem@gmail.com>";
  }

  // return  function for sending mail
  return smtp.sendMail(options);
};
