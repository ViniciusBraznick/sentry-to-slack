const { WebClient } = require('@slack/web-api');

const token = process.env.SLACK_TOKEN

const web = new WebClient(token);

const channeliD = process.env.SLACK_CHANNEL

module.exports = {
  async sendMessage(request: any, response: any) {
    async function send() {
      const result = await web.chat.postMessage({ channel: channeliD, text: '⚠ Alert erro sentry ⚠' });
    }

    send()
    response.send(200, { ok: true });
  }
}