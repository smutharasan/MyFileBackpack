/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AWS_IDENTITY_POOL_ID:
      process.env.NEXT_PUBLIC_AWS_IDENTITY_POOL_ID,
    NEXT_PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      "http://fragments-env.eba-shywj3p2.us-east-1.elasticbeanstalk.com",
    NEXT_PUBLIC_AWS_COGNITO_POOL_ID:
      process.env.NEXT_PUBLIC_AWS_COGNITO_POOL_ID,
    NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID:
      process.env.NEXT_PUBLIC_AWS_COGNITO_CLIENT_ID,
    NEXT_PUBLIC_AWS_COGNITO_HOSTED_UI_DOMAIN:
      process.env.NEXT_PUBLIC_AWS_COGNITO_HOSTED_UI_DOMAIN ||
      "myfilebackpack.auth.us-east-1.amazoncognito.com",
    NEXT_PUBLIC_OAUTH_SIGN_IN_REDIRECT_URL:
      process.env.NEXT_PUBLIC_OAUTH_SIGN_IN_REDIRECT_URL ||
      "http://localhost:3000",
    NEXT_PUBLIC_OAUTH_SIGN_OUT_REDIRECT_URL:
      process.env.NEXT_PUBLIC_OAUTH_SIGN_OUT_REDIRECT_URL ||
      "http://localhost:3000",
  },
  output: "standalone",
};

export default nextConfig;
