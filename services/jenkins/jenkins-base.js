import { BaseJsonService } from '../index.js'

export default class JenkinsBase extends BaseJsonService {
  static auth = {
    userKey: 'jenkins_user',
    passKey: 'jenkins_pass',
    serviceKey: 'jenkins',
  }

  async fetch({
    url,
    schema,
    qs,
    errorMessages = { 404: 'instance or job not found' },
  }) {
    return this._requestJson(
      this.authHelper.withBasicAuth({
        url,
        options: { qs },
        schema,
        errorMessages,
      })
    )
  }
}
