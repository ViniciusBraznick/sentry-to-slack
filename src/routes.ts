const SlackController = require('./controllers/SlackController');

module.exports = [
  {
    endpoint: '/sentry-error',
    method: 'POST',
    handler: SlackController.sendMessage,
  },
]