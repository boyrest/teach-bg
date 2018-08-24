'use strict'
'use strict'
const baseConfig = {
  NODE_ENV: '"production"',
  BASE_URL: ''
};
switch (process.env.WEB_ENV) {
  case "local":
    baseConfig.BASE_URL = '"http://sha.staging.admin2.intramirror.com:8096/"';
    baseConfig.REST_API = '"http://192.168.0.120:8040/"';
    break;
  case "test":
    baseConfig.BASE_URL = '"http://test.admin.intramirror.com:8096/"';
    baseConfig.REST_API = '"http://47.100.24.139:8103/"';
    break;
  case "staging":
    baseConfig.BASE_URL = '"http://sha.staging.admin2.intramirror.com:8096/"';
    baseConfig.REST_API = '"http://101.132.132.34:8103/"';
    break;
  case "prd":
    baseConfig.BASE_URL = '"http://admin2.intramirror.com:8085/"';
    baseConfig.REST_API = '"http://admin3.intramirror.com:8103/"';
    break;
  case "test_ci":
    baseConfig.BASE_URL = '"http://test.admin.intramirror.com:8099/"';
    break;
  case "performance":
    baseConfig.BASE_URL = '"http://47.100.245.83:8096/"';
    baseConfig.REST_API = '"http://47.100.245.83:8103/"';
    baseConfig.CHANNEL_API = '"http://test.channel.intramirror.com/"';
    break;
}

module.exports = baseConfig




