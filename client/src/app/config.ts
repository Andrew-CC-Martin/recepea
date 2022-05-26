import { apiUrls } from './constants'

type Environment = 'local' | 'production'

export const getApiBase = (): Environment => {
  switch (process.env.API_TARGET) {
    case 'local':
      return apiUrls.local as Environment

    case 'production':
      return apiUrls.production as Environment

    default:
      return apiUrls.local as Environment
  }
}
