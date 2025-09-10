const dotenv = require('dotenv');

dotenv.config({ path: './.env.deploy' });

const {
  DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOST, DEPLOY_REPOSITORY,
} = process.env;
const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_PATH,
  DEPLOY_REF,
} = process.env;

module.exports = {
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'post-deploy': 'pwd && nvm use 14 && npm ci && npm run build',
    },
  },
};
