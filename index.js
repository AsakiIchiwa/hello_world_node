import figlet from "figlet";
import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  figlet("Hello World!!", (err, data) => {
    if (err) {
      res.send("Something went wrong with figlet");
      return;
    }

    res.send(`
      <pre style="color: green; font-family: monospace;">${data}</pre>
      <p style="color: blue; font-weight: bold;">— from StuID: 23521450</p>
    `);
  });
});

app.listen(port, () => {
  console.log(`Server started on: ${port}`);
});
