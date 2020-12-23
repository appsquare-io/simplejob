export interface Init {
  host?: string
}

export type Verb = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface Job {
  name: string
  enabled?: boolean
  endpoint: string
  verb?: Verb
  runAt?: string
  headers?: string
  body?: string
  retry?: boolean
}

export interface JobError {
  errors: any
}

export interface Result {
  status: number
  headers: string
  body: any
  at: Date
  duration: number
  runCount: number
  job: Job
}

export interface App {
  name: string
  token: string
  createdAt?: Date
  updatedAt?: Date
  description?: string
}
