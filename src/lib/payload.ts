import { getPayload } from 'payload'
import config from '@payload-config'

let payloadPromise: ReturnType<typeof getPayload> | undefined

export const getCMS = () => {
  payloadPromise ??= getPayload({ config })
  return payloadPromise
}
