const { Sequelize } = require('sequelize');
const fs = require('fs');

if (fs.existsSync('config.env')) {
  require('dotenv').config({
      path: './config.env'
  });
}

const toBool = (x) => x === 'true';

const DATABASE_URL = process.env.DATABASE_URL === undefined ? "./database.db" : process.env.DATABASE_URL

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  AUDIO_DATA: process.env.AUDIO_DATA || '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*;*𝑺𝒀𝑨𝑴_𝑺𝑬𝑹*;https://i.imgur.com/TrJHlgs.png',
  WARN_COUNT: process.env.WARN_COUNT || '3',
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || 'kick',
  ALIVE_DATA : process.env.ALIVE_DATA || "_*Hy &sender i am alive now*_\n\n_PLATFORM: &platform_\n_RUNTIME : &runtime_\n\n_. type alive to update your alive message_",
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f", "deb80cd12ababea1c9b9a8ad6ce3fab2", "78c84c62b32a88e86daf87dd509a657a"],
  SESSION_ID: process.env.SESSION_ID || 'OEw3SnR_J_A_R_V_I_S_lUTU=',
  LANG: process.env.LANG || 'ML','EN',
  AUTO_REACTION: process.env.AUTO_REACTION || 'false',
  HANDLERS: process.env.HANDLER  || '.',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: 'main',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '〄〘 𝑩𝒀 𝑺𝒀𝑨𝑴_𝑺𝑬𝑹 😚♥️ 〙 〄          
           〘ㅤ Since 2007 ㅤ',
  AUTO_STATUS_VIEWS: toBool(process.env.AUTO_STATUS_VIEWS || 'false'),
  WELCOME_MSG: process.env.WELCOME_MSG || 'Hi @user Welcome to @gname',
  GOODBYE_MSG: process.env.GOODBYE_MSG || 'Hi @user It was Nice Seeing you',
  AUTHOR: process.env.AUTHOR || '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*',
  MEDIA_DATA: process.env.MEDIA_DATA|| '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*;*𝑺𝒀𝑨𝑴_𝑺𝑬𝑹*;https://i.imgur.com/TrJHlgs.png',
  SUDO: process.env.SUDO || '919947121619','13025449902',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  BOT_INFO: process.env.BOT_INFO || '*✪⃝⸸ꜛꪶ͢𝐒𝐘͔𝐀𝐌 𝐒𝐄𝐑͢ꫂꜜ™*;*𝑺𝒀𝑨𝑴_𝑺𝑬𝑹*;https://i.imgur.com/TrJHlgs.png',
  WORK_TYPE: process.env.WORK_TYPE || 'private',
  DATABASE: DATABASE_URL === "./database.db" ? new Sequelize({ dialect: "sqlite", storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: "postgres", ssl: true, protocol: "postgres", dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
};
