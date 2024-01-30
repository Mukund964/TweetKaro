import dotenv from 'dotenv';
dotenv.config();
export const config = {
    PORT : process.env.PORT,
    key : process.env.AuthKey,
    Region : process.env.AWS_Region,
    AccessKey : process.env.AccessKey,
    SecretAccessKey : process.env.SecretAccessKey,
    Bucket : process.env.Bucket_Name
};
