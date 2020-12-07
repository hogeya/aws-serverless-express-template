import minimist from 'minimist'
import { modifyFiles } from './utils'

const args = minimist(process.argv.slice(2), {
  string: [
    'account-id',
    'bucket-name',
    'function-name',
    'region'
  ],
  default: {
    region: 'us-east-1',
    'function-name': 'ServerlessExpressFunction'
  }
})

const accountId = args['account-id']
const bucketName = args['bucket-name']
const functionName = args['function-name']
const region = args.region

if (!accountId || accountId.length !== 12) {
  console.error('アカウントIDは12文字を指定してください --account-id="<accountId>"')
  process.exit(1)
}

if (!bucketName) {
  console.error('バケット名を指定してください --bucket-name="<bucketName>"')
  process.exit(1)
}

modifyFiles(
  ['./simple-proxy-api.yaml', './package.json', './cloudformation.yaml'],
  [
    {
      regexp: /YOUR_ACCOUNT_ID/g,
      replacement: accountId
    },
    {
      regexp: /YOUR_AWS_REGION/g,
      replacement: region
    },
    {
      regexp: /YOUR_UNIQUE_BUCKET_NAME/g,
      replacement: bucketName
    },
    {
      regexp: /YOUR_SERVERLESS_EXPRESS_LAMBDA_FUNCTION_NAME/g,
      replacement: functionName
    }
  ]
)
