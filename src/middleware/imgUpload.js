import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import {config} from '../config/config.js';

aws.config.update({
    region : config.Region,
    secretAccessKey : config.SecretAccessKey,
    accessKeyId : config.AccessKey
});

const s3 = new aws.S3();

export const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: config.Bucket,
      acl : 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  });