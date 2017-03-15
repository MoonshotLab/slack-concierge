const fs = require('fs');
if (fs.existsSync('.env')) {
  require('dotenv').config();
}
const slackin = require('slackin');

slackin.default({
  token: process.env.SLACK_TOKEN,
  interval: 1000 * 60,
  org: process.env.SLACK_DOMAIN,
  silent: false
}).listen(process.env.PORT || 3000);
