const express = require("express");
const app = express();
require("./db/mongoose");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const port = process.env.PORT || 3000;

// app.use((req, res, next) => {
//   res.status(503).send("Site is currently down. Check Back Soon");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("listening on port " + port);
});
