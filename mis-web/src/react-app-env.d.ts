/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_GRAPHQL_SERVER_URL: string;
    REACT_APP_SECRET: string;
  }
}
