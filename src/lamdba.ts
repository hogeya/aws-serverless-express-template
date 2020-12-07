import serverlessExpress from 'aws-serverless-express'
import * as lamdba from 'aws-lambda'
import { app } from './app'

const binaryMimeTypes: string[] = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'font/eot',
  'font/opentype',
  'font/otf',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml'
]
const server = serverlessExpress.createServer(app, null, binaryMimeTypes)

const handler = (event: lamdba.APIGatewayProxyEvent, context: lamdba.Context) => serverlessExpress.proxy(server, event, context)

export { handler }
