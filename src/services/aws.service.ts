// import AWS from 'aws-sdk';
// import multer from 'multer';
// import multerS3 from 'multer-s3';

// const s3 = new AWS.S3({
//   signatureVersion: 'v4',
//   region: 'us-west-1', // region
//   accessKeyId: '', // process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: '', // process.env.AWS_SECRET_ACCESS_KEY,
// });

// class S3Factory {
//   public upload = () => {
//     return multer({
//       storage: multerS3({
//         s3,
//         bucket: '', // CGN
//         acl: 'public-read',
//         // @ts-ignore
//         metadata: (req, file, cb) => {
//           cb(null, {
//             fieldName: file.fieldname,
//             foo: 'bar',
//           });
//         },
//         // @ts-ignore
//         key: (req, file, cb) => {
//           // cb(null, file.originalname);
//           if (!file.originalname.match(/\.(jpg|jpeg|png|pdf)$/)) {
//             return cb(new Error('Only image files are allowed!'));
//           }
//           cb(null, file.originalname);
//         },
//       }),
//     });
//   }
// }

// const S3 = new S3Factory();

// export default S3;
