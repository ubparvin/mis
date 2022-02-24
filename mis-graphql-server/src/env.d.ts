declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;
    APP_SECRET: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_USERNAME: string;
    SMTP_PASSWORD: string;
    WEB_APP_HOST: string;
  }
}
