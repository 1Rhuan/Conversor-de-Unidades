const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const conversaoRoutes = require("./routes/conversaoRoutes");
app.use(cors());
app.use(express.json());
app.use("/api", conversaoRoutes);
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

if (process.env.NODE_ENV !== "test") {
  app.listen(8080, () => {
    console.log("Rodando em http://localhost:8080");
  });
}

module.exports = app;
