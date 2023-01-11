const express = require("express");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const bookedTimesRoute = require("./routes/bookedtTimes");
const threadRoute = require("./routes/bulletinBoard");
const postsRoute = require("./routes/posts");
const mailRoute = require("./routes/mail");
const laundryRoomsRouter = require("./routes/laundryRooms");
const remindersRouter = require("./routes/reminder");
const errorHandler = require("./middlewares/errorHandler");
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    await mongoose.set("strictQuery", true);
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
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/booked", bookedTimesRoute);
app.use("/thread", threadRoute);
app.use("/posts", postsRoute);
app.use("/mail", mailRoute);
app.use("/laundryroom", laundryRoomsRouter);
app.use("/reminder", remindersRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  connect();
  console.log(`server listening on port: ${PORT}`);
});
