require("./db/mongoose");
const Task = require("./models/task");

Task.findByIdAndDelete("607097aa1be6f65134aa67ac")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((results) => {
    console.log(results);
  })
  .catch((err) => console.log(err));
