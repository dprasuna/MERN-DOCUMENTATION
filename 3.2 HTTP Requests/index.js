import express from "express";
export const app = express();
const port = 3011;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.get("/contact1", (req, res) => {
  res.send("<p>agag hgaha hhah hahah</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
