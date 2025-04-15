interface SentryError {
  action: string,
  actor: {
    id: string,
    name: string,
    type: string,
  },
  data: {
    event: {
      _ref: number,
      contexts: {
        browser: {
          name: string,
          type: string,
          version: string,
        },
        os: {
          name: string,
          type: string,
          version: string,
        }
      },
      datetime: string,
      event_id: string,
      issue_url: string,
      issue_id: string,
      key_id: string,
      level: string,
      project: number,
      received: number,
      time_spent: null,
      timestamp: number,
      title: string,
      type: string,
      url: string,
      user: {
        ip_address: string,
      },
      version: string,
      web_url: string,
    },
    triggered_rule: string,
    issue_alert: {
      title: string,
      settings: [
        {
          name: string,
          value: string,
        }
      ]
    }
  }
}
