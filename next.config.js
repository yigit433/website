const WindiCSS = require("windicss-webpack-plugin");

module.exports = {
  env: {
    BIRTHDAY: process.env.BIRTHDAY,
    BIRTHMONTH: process.env.BIRTHMONTH,
    BIRTHYEAR: process.env.BIRTHYEAR,
    BIRTHTIME: process.env.BIRTHTIME,
  },
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config) => {
    config.plugins.push(new WindiCSS());

    return config;
  },
};
