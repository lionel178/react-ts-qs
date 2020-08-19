const path = require('path')
const ip = require('ip')

const PROJECT_PATH = path.resolve(__dirname, '../')

const PROJECT_NAME = path.parse(PROJECT_PATH).name

const isDev = process.env.NODE_ENV !== 'production'

const SERVER_HOST = ip.address()

const SERVER_PORT = 9000

const IS_OPEN_HARD_SOURCE = true

module.exports = {
  isDev,
  PROJECT_NAME,
  PROJECT_PATH,
  SERVER_HOST,
  SERVER_PORT,
  IS_OPEN_HARD_SOURCE,
}
