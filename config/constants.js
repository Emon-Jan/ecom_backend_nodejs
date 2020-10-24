const devConfig = {
  DB_URI: process.env.DATABASE_MONGO_URI,
};

const testConfig = {};

const prodConfig = {};

const defaultConfig = {
  PORT: process.env.PORT,
};

const envConfig = (env) => {
  switch (env) {
    case "development":
      return devConfig;
    case "test":
      return testConfig;
    default:
      return prodConfig;
  }
};

export default {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
