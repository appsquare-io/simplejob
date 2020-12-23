import { Init, Job, JobError } from './interfaces'

export class SimpleJobClient {
  private host?: string

  constructor({ host }: Init) {
    this.host = host
  }

  async run(job: Job, data?: any): Promise<Job | JobError> {
    let result: Job | JobError

    if (process.env.NODE_ENV == 'production') {
      // TODO: create or run job from server
    } else {
      result = job
      this.runLocally(job, data)
    }

    return result
  }

  private async runLocally(job: Job, data?: any) {
    const { endpoint, verb } = job
    const host = this.host ? this.host + endpoint : endpoint

    const result = await fetch(host, {
      method: verb || 'POST',
      body: data ? JSON.stringify(data) : null
    }).then(response => response.json())

    // TODO: Logger
    console.log(result)
  }
}

export default SimpleJobClient
