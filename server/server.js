const express = require("express");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const bookedTimesRoute = require("./routes/bookedtTimes");
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDb were disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDb were conected");
});

app.use(express.json());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/booked", bookedTimesRoute);

app.get("/", (req, res) => {
  res.send("HELO WORLD");
});

app.listen(PORT, () => {
  connect();
  console.log(`server listening on port: ${PORT}`);
});
