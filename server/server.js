const express = require("express");
const app = express();
const PORT = 8080;
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const bookedTimesRoute = require("./routes/bookedtimes");
dotenv.config();

app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", usersRoute);
app.use("/booked", bookedTimesRoute);

app.get("/", (req, res) => {
  res.send("HELO WORLD");
});

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});
