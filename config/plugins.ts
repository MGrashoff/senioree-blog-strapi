export default ({ env }) => {
    return {
        upload: {
            config: {
                provider: "aws-s3",
                providerOptions: {
                    baseUrl: env("AWS_S3_BASE_URL"),
                    rootPath: env("AWS_S3_ROOT_PATH"),
                    s3Options: {
                        credentials: {
                            accessKeyId: env("AWS_ACCESS_KEY_ID"),
                            secretAccessKey: env("AWS_ACCESS_SECRET"),
                        },
                        region: env("AWS_REGION", "eu-central-1"),
                        params: {
                            ACL: env("AWS_ACL", "public-read"),
                            signedUrlExpires: env("AWS_SIGNED_URL_EXPIRES", 15 * 60),
                            Bucket: env("AWS_S3_BUCKET"),
                        },

                    },
                },
                actionOptions: {
                    upload: {},
                    uploadStream: {},
                    delete: {},
                },
            },
        }
    };
};