import chalk from "chalk";
import figlet from "figlet";
import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  figlet("Hello World!!", (err, data) => {
  if (err) {
    console.error("Something went wrong with figlet:", err);
    return;
  }

  console.log(
    chalk.green(data) +
    "\n" +
    chalk.blue.bold("— from StuID: 23521450 ")
  );
});

});
app.listen(port, () => {
    console.log(`Server started on:${port}`);
});


