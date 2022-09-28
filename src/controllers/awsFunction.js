const aws = require('aws-sdk')


// aws.config.update({
//     accessKeyId: "AKIAY3L35MCRZNIRGT6N",
//     secretAccessKeyId: "9f+YFBVcSjZWM6DG9R4TUN8k8TGe4X+lXmO4jPiU",
//     region: "ap-south-1"
// })

// aws.config.update({
//     region: "ap-south-1",
//     cre
//     accessKeyId: "AKIAY3L35MCRZNIRGT6N",
//     secretAccessKeyId: "YFBVcSjZWM6DG9R4TUN8k8TGe4X+lXmO4jPiU",
//     region: "ap-south-1"
// })

aws.config.update({
    region: 'ap-south-1',
    apiVersion: 'latest',
    credentials: {
      accessKeyId: 'AKIAY3L35MCRZNIRGT6N',
      secretAccessKey: '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'
    }
  })


  //     Access key ID
    // AKIAY3L35MCRZNIRGT6N
    // Secret access key
    // 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

const uploadFile = async function (file) {
    console.log(file);
    return new Promise(function (resolve, reject) {
        let s3 = new aws.S3({ apiVersion: '2006-03-01' });
        let uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket",
            Key: "RSD/" + file.originalname,
            Body: file.buffer
        }
        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "Error": err })
            }
            console.log("file uploaded succesfully")
            return resolve(data.Location)
        })

    })

}

module.exports.uploadFile = uploadFile