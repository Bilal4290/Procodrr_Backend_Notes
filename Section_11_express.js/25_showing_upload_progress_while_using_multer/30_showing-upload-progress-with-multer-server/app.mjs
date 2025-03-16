import express from "express";
import multer from "multer";
import path from "path";
import cors from "cors";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const id = crypto.randomUUID();
    const extension = path.extname(file.originalname);
    file.id = id;
    cb(null, `${id}${extension}`);
  },
});

const upload = multer({ storage });

const app = express();
const PORT = 4000;

app.use(cors());

app.post(
  "/upload",
  upload.fields([
    { name: "profilePics", maxCount: 1 },
    { name: "bg", maxCount: 5 },
  ]),
  (req, res) => {
    console.log("Upload completed");
    res.json({ files: req.files, body: req.body });
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
