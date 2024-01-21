function downloader(url) {
  console.log("Download started from the URL", url);
  return new Promise((res, rej) => {
    setTimeout(() => {
      let download = true;
      if (download) {
        res(console.log("The data is downloaded"));
      } else {
        rej(console.log("The data download was failed"));
      }
    }, 4000);
  });
}
function writeFile(data) {
  console.log(`The ${data} is being written in sample.txt file`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      let write = true;
      if (write) {
        res(console.log("The data is written in sample.txt file"));
      } else {
        rej(console.log("The operation was failed was failed"));
      }
    }, 2000);
  });
}
function uploadFile(fileName, newUrl) {
  console.log(`The ${fileName} is started upoloading in the ${newUrl}`);
  return new Promise((res, rej) => {
    setTimeout(() => {
      let upload = true;
      if (upload) {
        res(console.log("The upload is complete"));
      } else {
        rej(console.log("The operation was failed was failed"));
      }
    }, 3000);
  });
}
downloader("xyz.com")
  .then((downloadResult) => {
    return writeFile("Sample Data");
  })
  .then((writeResult) => {
    return uploadFile("sample.txt", "abc.com");
  });
