import config from '@payload-config'
import { REST_DELETE, REST_GET, REST_OPTIONS, REST_PATCH, REST_POST } from '@payloadcms/next/routes'
import { Users } from '@/collections/Users'

export const dynamic = 'force-dynamic'

export const GET = REST_GET(config)
const payloadPost = REST_POST(config)

export async function POST(request: Request, args: { params: Promise<{ slug?: string[] }> }): Promise<Response> {
  const { slug = [] } = await args.params
  if (slug[0] === Users.slug && slug[1] === 'first-register') {
    return Response.json({ message: 'La création du premier administrateur doit être effectuée via le seed.' }, { status: 403 })
  }
  return payloadPost(request, args)
}
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const OPTIONS = REST_OPTIONS(config)
