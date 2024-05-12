import express from "express";
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<strong>This is some strong text</strong>",
  };
  res.render("index.ejs", data); // Here 'index.ejs' is being rendered with 'data'
});


app.post("/submit", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const length = fname.length + lname.length;
  res.render("submit.ejs",{length});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
