const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("pdf"), (req, res) => {
  res.json({ file: req.file.filename });
});

app.use("/uploads", express.static("uploads"));

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
