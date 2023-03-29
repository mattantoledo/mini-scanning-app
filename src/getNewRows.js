function createData(
    id,
    bucketName,
    fileName,
    sensitiveData
  ) {
    return { id, bucketName, fileName, sensitiveData};
  }

export default function getNewRows(bucketName) {
    return [
        createData(1, bucketName, 'emails.txt', 'Email'),
        createData(2, bucketName, '', 'Password'),
        createData(3, bucketName, '', ''),
      ];

}