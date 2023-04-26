const messagePromise = new Promise((resolve, reject) => {
  let progress = true;
  const message = "Hello, Your Promise has been resolved!!!";
  if (progress) {
    resolve(message);
  } else {
    reject({
      message:
        "Hello, Your Promise has been rejected!!!",
    });
  }
});
messagePromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });
