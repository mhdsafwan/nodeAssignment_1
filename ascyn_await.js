const fs = require("fs");
const axiosRequest = require("axios");

async function genFile() {
  try {
    let response = await axiosRequest.get(
      "https://www.boredapi.com/api/activity"
    ); // response to be written to file
    await fs.promises.writeFile(
      "file.txt",
      `You could ${response.data.activity}`
    ); //generates a new file.txt if not exists and writes the content into the file
    console.log("File created successfully.");
  } catch (err) {
    console.error(err);
  }
}

genFile();
// axiosRequest.get("https://www.boredapi.com/api/activity")
