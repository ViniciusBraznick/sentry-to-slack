const SlackController = require('./controllers/SlackController');

module.exports = [
  {
    endpoint: '/sentry-error',
    method: 'GET',
    handler: SlackController.sendMessage,
  },
]