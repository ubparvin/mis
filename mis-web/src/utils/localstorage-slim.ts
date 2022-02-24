import ls from "localstorage-slim";
import encUTF8 from "crypto-js/enc-utf8";
import AES from "crypto-js/aes";

console.log("app_secret", process.env.REACT_APP_SECRET);

ls.config.encrypt = true;
ls.config.secret = process.env.REACT_APP_SECRET;
ls.config.encrypter = (data, secret) =>
  AES.encrypt(JSON.stringify(data), secret as string).toString();
ls.config.decrypter = (data, secret) => {
  try {
    return JSON.parse(
      AES.decrypt(data as any, secret as any).toString(encUTF8)
    );
  } catch (e) {
    console.log(e);
    return data;
  }
};

export const secureLocalStorage = ls;
