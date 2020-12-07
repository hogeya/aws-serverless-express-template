Serverless template

nodenvを使用することをオススメします

1. セットアップ

- コンフィグファイル
```
$ cp config_examples/* ./
```

- ライブラリ
```
yarn install
```

- awsの環境設定(aws-cliもセットアップしてください)
```
$ yarn run config --account-id=<YOUR_ACCOUNT_ID> --bucket-name=<APPLICATION_BUCKET_NAME> --region=<AWS_REGION>
```

- local環境
```
yarn run start
```

- Typescriptのビルド
```
yarn run build
```

2. デプロイ

- 1回目のデプロイ
```
yarn run setup
```

- 2回目以降のデプロイ
```
yarn run package-deploy
```
