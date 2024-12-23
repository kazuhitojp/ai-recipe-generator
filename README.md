# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Working with Storage Browser for Amazon S3

[Storage Browser for S3](https://aws.amazon.com/s3/features/storage-browser/)は、Amazon S3に保存されているデータのシンプルなグラフィカルインターフェイスをエンドユーザーに提供するためにWebアプリケーションに追加できるオープンソースコンポーネントです。S3用のストレージブラウザを使用すると、認定されたエンドユーザーアクセスを提供して、独自のアプリケーションから直接S3のデータを閲覧、ダウンロード、アップロード、コピー、削除することができます。

Storage Browser for S3 は、ファイルの次の操作をサポートします。リスト、取得、配置、コピー、アップロード、削除。高スループットデータ転送を提供するには、S3のストレージブラウザは、エンドユーザーがアップロードリクエストにアクセスして最適化することを許可されているデータのみを表示します。ストレージブラウザは、読み込み時間の速い時間のパフォーマンスを最適化し、エンドユーザーがアップロードするデータのチェックサムを計算し、パブリックインターネット上でデータの整合性が（輸送中）維持されていることを確認した後にオブジェクトを受け入れます。AWSセキュリティとIDサービス、または独自のマネージドサービスを使用して、エンドユーザーのIDに基づいてデータへのアクセスを制御できます。既存のアプリケーションの設計とブランディングに合わせて、ストレージブラウザをカスタマイズすることもできます。

Storage Browser for S3は、Reactフレームワーク上のWebおよびイントラネットアプリケーションでのみ使用できます。ストレージブラウザーを使用して、S3 Glacier Flexible Retrieval、S3 Glacier Deep Archive、S3 Intelligent-Tiering Archive Access Tier、S3 Intelligent-Tiering Deep Archive Access Tierを除くすべてのストレージクラスでAmazon S3オブジェクトにアクセスできます。

Storage Browser for S3は、[AWS Amplify React](https://ui.docs.amplify.aws/)ライブラリのWebアプリケーションで使用できます。ストレージブラウザの詳細については、S3のストレージブラウザを参照してください。

## Using Storage Browser for S3

Storage Browser for S3では、*location*はS3バケットまたはプレフィックスであり、[S3 Access Grants](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-grants.html)、IAMポリシー、または独自の管理承認サービスを使用するためのエンドユーザーにアクセスを許可します。エンドユーザーに特定の場所にアクセスすることを許可した後、その場所内のデータを操作できます。

S3ユーザーインターフェイス用のストレージブラウザには4つのメインビューがあります:

- Home page: ホームページには、ユーザーがアクセスできるS3の場所と、それぞれのアクセス許可がリストされています。これは、エンドユーザーがアクセスできるルートレベルS3リソースと各S3の場所のアクセス許可（読み取り/書き込み/読み取り書き）を示すユーザーの初期ビューです。

- Location details: このビューを使用すると、ユーザーはS3のファイルとフォルダーを閲覧し、ファイルをアップロードまたはダウンロードできます。（S3のストレージブラウザでは、オブジェクトはファイルと呼ばれ、プレフィックスとバケットはフォルダーとして知られています。）

- Location action: ユーザーがストレージブラウザでアクション（アップロードなど）を選択した後、ファイルの場所の別のビューを開きます。

- Vertical ellipsis: 垂直の省略記号アイコンは、アクションのドロップダウンリストを開きます。

S3にストレージブラウザを使用する場合、次の制限に注意してください:

- dots (.)で開始または終了するフォルダーはサポートされていません。

- S3 Access Grants書き込みのみの許可のみがサポートされていません。

- Storage Browser for S3は、最大160 GBのサイズのファイルのプット操作をサポートします。

- Storage Browser for S3は、5 GB未満のファイルのコピー操作のみをサポートしています。ファイルサイズが5 GBを超えると、ストレージブラウザがリクエストに失敗します。

## Installing Storage Browser for S3

You can install Storage Browser for S3 from the latest version of aws-amplify/ui-react-storage and aws-amplify packages in the aws-amplify GitHub repository. When installing Storage Browser for S3, make sure to add the following dependencies to your package.json file:

```json
"dependencies": {
    "aws-amplify/ui-react-storage": "latest",
    "aws-amplify": "latest",
  }
```

Alternatively, you can add the dependencies using Node Package Manager (NPM):

```sh
npm i --save @aws-amplify/ui-react-storage aws-amplify
```

## Setting up Storage Browser for S3

エンドユーザーをAmazon S3の場所に接続するには、最初に認証と承認方法を設定する必要があります。ストレージを参照して認証と承認方法を設定する3つの方法がありますr:

- Method 1: Managing data access for your customers and third party partners
- Method 2: Managing data access for your IAM principals for your AWS account
- Method 3: Managing data access at scale

### Method 1: Managing data access for your customers and third party partners

この方法を使用すると、[AWS Amplify Auth](https://docs.amplify.aws/react/build-a-backend/auth/set-up-auth/)を使用して、ファイルのアクセス制御とセキュリティを管理できます。この方法は、S3のデータと顧客またはサードパーティのパートナーを接続する場合に理想的です。このオプションを使用すると、顧客はソーシャルまたはエンタープライズのアイデンティティプロバイダーを使用して認証できます。

AWS Amplify Authを使用して、Amplifyストレージを使用するように構成されているS3バケットを使用して、エンドユーザーとサードパーティのパートナーにIAM資格情報を提供します。AWS Amplify Authは、組み込みのユーザーディレクトリまたはエンタープライズディレクトリ、または消費者IDプロバイダーからユーザーを認証および承認できる完全に管理された顧客アイデンティティおよびアクセス管理サービスであるAmazon Cognitoに基づいて構築されています。Amplify Authorizationモデルは、現在の認証されたユーザーがアクセスできるプレフィックスを定義します。AWS Amplifyの承認を設定する方法の詳細については、ストレージのセットアップを参照してください。

Amplify認証とストレージのメソッドを使用してコンポーネントを初期化するには、次のコードスニペットをWebアプリケーションに追加します:

```ts
import {
  createAmplifyAuthAdapter,
  createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";

import config from './amplify_outputs.json';

Amplify.configure(config);

export const { StorageBrowser } = createStorageBrowser({
  config: createAmplifyAuthAdapter(),
});
```

### Method 2: Managing data access for your IAM principals for your AWS account

IAMプリンシパルまたはAWSアカウントのアクセスを直接管理する場合は、[GetDataAccess](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetDataAccess.html) S3 API操作を呼び出す許可を持つIAMロールを作成できます。これをセットアップするには、S3バケツのアクセス許可と指定されたIAM IDのプレフィックスをマップするために、 S3 Access Grants インスタンスを作成する必要があります。ストレージブラウザコンポーネント（IAM資格情報を取得した後にクライアント側に呼び出される必要があります）は、[ListCallerAccessGrants](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListCallerAccessGrants.html) S3 API操作を呼び出して、利用可能な助成金をIDリクエスト担当者に取り出し、コンポーネントの場所に入力します。S3：GetDataAccessの許可を取得した後、これらの資格情報は、S3へのデータアクセスを要求するためにストレージブラウザコンポーネントによって使用されます。

```ts
import {
  createManagedAuthAdapter,
  createStorageBrowser,
  AWSTemporaryCredentials,
} from '@aws-amplify/ui-react-storage/browser';
import "@aws-amplify/ui-react-storage/styles.css";

export const { StorageBrowser } = createStorageBrowser({
  config: createManagedAuthAdapter({
    credentialsProvider: async (options?: { forceRefresh?: boolean }) => {
      // return your credentials object
      return {
        credentials: {
          accessKeyId: 'my-access-key-id',
          secretAccessKey: 'my-secret-access-key'
          sessionToken: 'my-session-token',
          expiration: new Date();
        },
      }
    },
    // AWS `region` and `accountId`
    region: '',
    accountId: '',
    // call `onAuthStateChange` when end user auth state changes 
    // to clear sensitive data from the `StorageBrowser` state
    registerAuthListener: (onAuthStateChange) => {},
  })
});
```

### Method 3: Managing data access at scale

よりスケーラブルなソリューション（会社全体へのデータアクセスを提供するなど）のために、S3 Access GrantsインスタンスをIAM IDセンターに関連付ける場合は、現在の認証されたユーザーに代わってAmazon S3からデータをリクエストできます。たとえば、S3のデータへのコーポレートディレクトリアクセスでユーザーグループを付与できます。このアプローチを使用すると、Microsoft Entra、Oktaなどの外部プロバイダーでホストされているものを含む、ユーザーとグループのS3アクセス助成金の許可を中央に管理できます。

この方法を使用する場合、[IAM Identity Centerとの統合](https://docs.aws.amazon.com/singlesignon/latest/userguide/trustedidentitypropagation.html)により、既存のユーザーディレクトリを使用できます。IAM Identity Center Trusted Identityの伝播のもう1つの利点は、Amazon S3の各AWS CloudTrailデータイベントには、S3データにアクセスしたエンドユーザーIDへの直接的な参照が含まれていることです。

OAUTH 2.0をサポートするアプリケーションがあり、ユーザーがこれらのアプリケーションからAWSサービスにアクセスする必要がある場合は、信頼できるID伝播を使用することをお勧めします。信頼できるIDの伝播により、ユーザーはアプリケーションにサインインでき、そのアプリケーションはAWSサービスのデータにアクセスするリクエストでユーザーのIDを渡すことができます。このアプリケーションは、認証されたユーザーに代わってIAM Identity Centerと対話します。詳細については、顧客管理アプリケーションで信頼できるID伝播の使用を参照してください。

### Setup

S3 Access GrantsとIAM Identity Center Trusted Identity Propagationを使用して、AWS管理コンソールでストレージブラウザ認証をセットアップするには、現在の認証されたユーザーに代わってAmazon S3からデータをリクエストする必要があります。このアプローチを使用すると、Corporate Directoryのユーザーまたはユーザーのグループに、S3バケット、プレフィックス、またはオブジェクトに直接アクセスできます。これは、アプリケーションがユーザーをIAMプリンシパルにマッピングする必要がないことを意味します。

次のワークフローでは、IAM IDセンターとS3アクセス助成金を使用して、S3用のストレージブラウザをセットアップする手順の概要を示しています。:

Steps	Description

1. AWS組織にIAM IDセンターを有効にします
2. AWS IDとアクセス管理のアイデンティティセンターフェデレーションを構成します
3. AWS IDおよびアクセス管理管理のアイデンティティセンターコンソールに信頼できるトークン発行者を追加する
信頼できるトークン発行者は、IAM IDセンター内の外部IDプロバイダー（IDP）を表し、アプリケーションの認証されたユーザーのIDトークンを認識できるようにします。
4. ブートストラップアプリケーションとアイデンティティベアラーのIAMの役割を作成する
5. IAM Identity Centerでアプリケーションを作成して構成します
このアプリケーションは、認証されたユーザーに代わってIAM Identity Centerと対話します。

6	Add S3 Access Grants as a trusted application for identity propagation
This step connects your application to S3 Access Grants, so that it can make requests to S3 Access Grants on behalf of authenticated users.

7	Create a grant to a user or group
This step syncs users from AWS Identity and Access Management Identity Center with the System for Cross-domain Identity Management (SCIM). SCIM keeps your IAM Identity Center identities in sync with identities from your identity provider (IdP).

8	Create your Storage Browser for S3 component
Enable IAM Identity Center for your AWS Organizations
To enable IAM Identity Center for your AWS Organizations, perform the following steps:

Sign in to the AWS Management Console, using one of these methods:

New to AWS (root user) – Sign in as the account owner by choosing Root user and entering your AWS account email address. On the next page, enter your password.

Already using AWS (IAM credentials) – Sign in using your IAM credentials with administrative permissions.

Open the IAM Identity Center console.

Under Enable IAM Identity Center, choose Enable.

Note
IAM Identity Center requires the setup of AWS Organizations. If you haven't set up an organization, you can choose to have AWS create one for you. Choose Create AWS organization to complete this process.

Choose Enable with AWS Organizations.

Choose Continue.

(Optional) Add any tags that you want to associate with this organization instance.

(Optional) Configure the delegated administration.

Note
If you’re using a multi-account environment, we recommend that you configure delegated administration. With delegated administration, you can limit the number of people who require access to the management account in AWS Organizations. For more information, see Delegated administration.

Choose Save.

AWS Organizations automatically sends a verification email to the address that is associated with your management account. There might be a delay before you receive the verification email. Make sure to verify your email address within 24 hours, before your verification email expires.

Configure AWS Identity and Access Management Identity Center federation
To use Storage Browser for S3 with corporate directory users, you must configure IAM Identity Center to use an external identity provider (IdP). You can use the preferred identity provider of your choice. However, be aware that each identity provider uses different configuration settings. For tutorials on using different external identity providers, see IAM Identity Center source tutorials.

Note
Make sure to record the issuer URL and the audience attributes of the identity provider that you’ve configured because you will need to refer to it in later steps. If you don’t have the required access or permissions to configure an IdP, you might need to contact the administrator of the external IdP to obtain them.

Add a trusted token issuer in the AWS Identity and Access Management Identity Center console
The trusted token issuer represents your external identity provider in the AWS Identity and Access Management Identity Center, and recognizes tokens for your application’s authenticated users. The account owner of the IAM Identity Center instance in your AWS Organizations must perform these steps. These steps can be done either in the IAM Identity Center console, or programmatically.

To add a trusted token issuer in the AWS Identity and Access Management Identity Center console, perform the following steps:

Open the IAM Identity Center console.

Choose Settings.

Choose the Authentication tab.

Navigate to the Trusted token issuers section, and fill out the following details:

Under Issuer URL, enter the URL of the external IdP that serves as the trusted token issuer. You might need to contact the administrator of the external IdP to obtain this information. For more information, see Using applications with a trusted token issuer.

Under Trusted token issuer name, enter a name for the trusted token issuer. This name will appear in the list of trusted token issuers that you can select in Step 8, when an application resource is configured for identity propagation.

Update your Map attributes to your preferred application attribute, where each identity provider attribute is mapped to an IAM Identity Center attribute. For example, you might want to map the application attribute email to the IAM Identity Center user attribute email. To see the list of allowed user attributes in IAM Identity Center, see the table in Attribute mappings for AWS Managed Microsoft AD directory.

(Optional) If you want to add a resource tag, enter the key and value pair. To add multiple resource tags, choose Add new tag to generate a new entry and enter the key and value pairs.

Choose Create trusted token issuer.

After you finish creating the trusted token issuer, contact the application administrator to let them know the name of the trusted token issuer, so that they can confirm that the trusted token issuer is visible in the applicable console.

Make sure the application administrator selects this trusted token issuer in the applicable console to enable user access to the application from applications that are configured for trusted identity propagation.

Create an IAM role for the bootstrap application and identity bearer
To ensure that the bootstrap application and identity bearer users can properly work with each other, make sure to create two IAM roles. One IAM role is required for the bootstrap application and the other IAM role must be used for the identity bearer, or end users who are accessing the web application that requests access through S3 Access Grants. The bootstrap application receives the token issued by the identity provider and invokes the CreateTokenWithIAM API, exchanging this token with the one issued by the Identity Center.

Create an IAM role, such as bootstrap-role, with permissions such as the following. The following example IAM policy gives permissions to the bootstrap-role to perform the token exchange:


{
    "Version": "2012-10-17",
    "Statement": [{
        "Action": [
            "sso-oauth:CreateTokenWithIAM",
        ],
        "Resource": "arn:${Partition}:sso::${AccountId}:application/${InstanceId}/${ApplicationId}",
        "Effect": "Allow"
    },
    {
        "Action": [
            "sts:AssumeRole",
            "sts:SetContext"
        ],
        "Resource": "arn:aws:iam::${AccountId}:role/identity-bearer-role",
        "Effect": "Allow"
    }]
}
Then, create a second IAM role (such as identity-bearer-role), which the identity broker uses to generate the IAM credentials. The IAM credentials returned from the identity broker to the web application are used by the Storage Browser for S3 component to allow access to S3 data:


{
    "Action": [
        "s3:GetDataAccess",
        "s3:ListCallerAccessGrants",
    ],
    "Resource": "arn:${Partition}:s3:${Region}:${Account}:access-grants/default",
    "Effect": "Allow"
} 
This IAM role (identity-bearer-role) must use a trust policy with the following statement:


{
   "Effect": "Allow",
   "Principal": {
      "AWS": "arn:${Partition}:iam::${Account}:role/${RoleNameWithPath}"
   },
   "Action": [
       "sts:AssumeRole",
       "sts:SetContext"
   ]
}
Create and configure your application in IAM Identity Center
Note
Before you begin, make sure that you’ve created the required IAM roles from the previous step. You’ll need to specify one of these IAM roles in this step.

To create and configure a customer managed application in AWS IAM Identity Center, perform the following steps:

Open the IAM Identity Center console.

Choose Applications.

Choose the Customer managed tab.

Choose Add application.

On the Select application type page, under Setup preference, choose I have an application I want to set up.

Under Application type, choose OAuth 2.0.

Choose Next. The Specify application page is displayed.

Under the Application name and descriptionsection, enter a Display name for the application, such as storage-browser-oauth.

Enter a Description. The application description appears in the IAM Identity Center console and API requests, but not in the AWS access portal.

Under User and group assignment method, choose Do not require assignments. This option allows all authorized IAM Identity Center users and groups access to this application.

Under AWS access portal, enter an application URL where users can access the application.

(Optional) If you want to add a resource tag, enter the key and value pair. To add multiple resource tags, choose Add new tag to generate a new entry and enter the key and value pairs.

Choose Next. The Specify authentication page displays.

Under Authentication with trusted token issuer, use the checkbox to select the trusted token issuer that you previously created.

Under Configure selected trusted token issuers, enter the aud claim. The aud claim identifies the audience of the JSON Web Token (JWT), and it is the name by which the trusted token issuer identifies this application.

Note
You might need to contact the administrator of the external IdP to obtain this information.

Choose Next. The Specify authentication credentials page displays.

Under Configuration method, choose Enter one or more IAM roles.

Under Enter IAM roles, add the IAM role or Amazon Resource Name (ARN) for the identity bearer token. You must enter the IAM role that you created from the previous step for the identity broker application (for example, bootstrap-role).

Choose Next.

On the Review and configure page, review the details of your application configuration. If you need to modify any of the settings, choose Edit for the section that you want to edit and make your changes to.

Choose Submit. The details page of the application that you just added is displayed.

After you’ve set up your applications, your users can access your applications from within their AWS access portal based on the permission sets that you’ve created and the user access that you’ve assigned.

Add S3 Access Grants as a trusted application for identity propagation
After you set up your customer managed application, you must specify S3 Access Grants for identity propagation. S3 Access Grants vends credentials for users to access Amazon S3 data. When you sign in to your customer managed application, S3 Access Grants will pass your user identity to the trusted application.

Prerequisite: Make sure that you’ve set up S3 Access Grants (such as creating an S3 Access Grants instance and registering a location) before following these steps. For more information, see Getting started with S3 Access Grants.

To add S3 Access Grants for identity propagation to your customer managed application, perform the following steps:

Open the IAM Identity Center console.

Choose Applications.

Choose the Customer managed tab.

In the Customer managed applications list, select the OAuth 2.0 application for which you want to initiate access requests. This is the application that your users will sign in to.

On the Details page, under Trusted applications for identity propagation, choose Specify trusted applications.

Under Setup type, select Individual applications and specify access, and then choose Next.

On the Select service page, choose S3 Access Grants. S3 Access Grants has applications that you can use to define your own web application for trusted identity propagation.

Choose Next. You'll select your applications in the next step.

On the Select applications page, choose Individual applications, select the checkbox for each application that can receive requests for access, and then choose Next.

On the Configure access page, under Configuration method, choose either of the following:

Select access per application – Select this option to configure different access levels for each application. Choose the application for which you want to configure the access level, and then choose Edit access. In Level of access to apply, change the access levels as needed, and then choose Save changes.

Apply same level of access to all applications – Select this option if you don't need to configure access levels on a per-application basis.

Choose Next.

On the Review configuration page, review the choices that you made.

Note
You’ll want to make sure the s3:access_grants:read_write permission is granted for your users. This permission allows your users to retrieve credentials to access Amazon S3. Make sure to use either the IAM policy you created previously, or S3 Access Grants, to limit access to write operations.

To make changes, choose Edit for the configuration section that you want to make changes to. Then, make the required changes and choose Save changes.

Choose Trust applications to add the trusted application for identity propagation.

Create a grant to a user or group
In this step, you use IAM Identity Center to provision your users. You can use SCIM for automated or manual provisioning of users and groups. SCIM keeps your IAM Identity Center identities in sync with identities from your identity provider (IdP). This includes any provisioning, updates, and deprovisioning of users between your IdP and IAM Identity Center.

Note
This step is required because when S3 Access Grants is used with IAM Identity Center, local IAM Identity Center users aren’t used. Instead, users must be synchronized from the identity provider with IAM Identity Center.

To synchronize users from your identity provider with IAM Identity Center, perform the following steps:

Enable automatic provisioning.

Generate an access token.

For examples of how to set up the identity provider with IAM Identity Center for your specific use case, see IAM Identity Center Identity source tutorials.

Create your Storage Browser for S3 component
After you’ve set up your IAM Identity Center instance and created grants in S3 Access Grants, open your React application. In the React application, use createManagedAuthAdapter to set up the authorization rules. You must provide a credentials provider to return the credentials you acquired from IAM Identity Center. You can then call createStorageBrowser to initialize the Storage Browser for S3 component:


import {
    createManagedAuthAdapter,
    createStorageBrowser,
} from '@aws-amplify/ui-react-storage/browser';
import '@aws-amplify/ui-react-storage/styles.css';

export const { StorageBrowser } = createStorageBrowser({
   config: createManagedAuthAdapter({
    credentialsProvider: async (options?: { forceRefresh?: boolean }) => {
      // return your credentials object
      return {
        credentials: {
          accessKeyId: 'my-access-key-id',
          secretAccessKey: 'my-secret-access-key',
          sessionToken: 'my-session-token',
          expiration: new Date(),
        },
      }
    },
    // AWS `region` and `accountId` of the S3 Access Grants Instance.
    region: '',
    accountId: '',
    // call `onAuthStateChange` when end user auth state changes 
    // to clear sensitive data from the `StorageBrowser` state
    registerAuthListener: (onAuthStateChange) => {},
  })
});
Then, create a mechanism to exchange the JSON web tokens (JWTs) from your web application with the IAM credentials from IAM Identity Center. For more information about how to exchange the JWT, see the following resources:

How to develop a user-facing data application with IAM Identity Center and S3 Access Grants post in AWS Storage Blog

Scaling data access with S3 Access Grants post in AWS Storage Blog

S3 Access Grants workshop on AWS workshop studio

S3 Access Grants workshop on GitHub

Then, set up an API endpoint to handle requests for fetching credentials. To validate the JSON web token (JWT) exchange, perform the following steps:

Retrieve the JSON web token from the authorization header for incoming requests.

Validate the token using the public keys from the specified JSON web key set (JWKS) URL.

Verify the token's expiration, issuer, subject, and audience claims.

To exchange the identity provider’s JSON web token with AWS IAM credentials, perform the following steps:

Tip
Make sure to avoid logging any sensitive information. We recommend that you use error handling controls for missing authorization, expired tokens, and other exceptions. For more information, see the Implementing AWS Lambda error handling patterns  post in AWS Compute Blog.

Verify that the required Permission and Scope parameters are provided in the request.

Use the CreateTokenWithIAM API to exchange the JSON web token for an IAM Identity Center token.

Note
After the IdP JSON web token is used, it can’t be used again. A new token must be used to exchange with IAM Identity Center.

Use the AssumeRole API operation to assume a transient role using the IAM Identity Center token. Make sure to use the identity bearer role, also known as the role that carries the identity context (for example, identity-bearer-role) to request the credentials.

Return the IAM credentials to the web application.

Note
Make sure that you’ve set up a proper logging mechanism. Responses are returned in a standardized JSON format with an appropriate HTTP status code.