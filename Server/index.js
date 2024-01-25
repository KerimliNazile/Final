import express from "express";
const app = express();

import cors from "cors";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

dotenv.config();
app.use(cors());
app.use(express.json());

const finalsSchema = new Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    text: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

const Finals = mongoose.model("Finals", finalsSchema);
app.get("/finals", async (req, res) => {
  try {
    const finals = await Finals.find({});
    res.send(finals);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});
app.get("/finals/:id", async (req, res) => {
  try {
    const finals = await Finals.findById(req.params.id);
    res.send(finals);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.post("/finals", async (req, res) => {
  try {
    const final = new Finals({
      image: req.body.image,
      title: req.body.title,
      text: req.body.text,
      price: req.body.price,
    });
    await final.save();
    res.send({ message: "Created" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.delete("/finals/:id", async (req, res) => {
  try {
    const finals = await Finals.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

const port = process.env.PORT;
const url = process.env.URL.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(url)
  .then(() => console.log("Db connect"))
  .catch((err) => console.log("Db not connect" + err));
app.listen(port, () => {
  console.log(`Example app listening on port `);
});
