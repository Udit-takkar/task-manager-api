const request = require("supertest");
const User = require("../src/models/user");
const app = require("../src/app");
const { userOneId, userOne, setupDatabase } = require("./fixtures/db");
const Task = require("../src/models/task");
const express = require("express");

beforeEach(setupDatabase);

test("Should create task for user", async () => {
  const response = await request(app)
    .post("/tasks")
    .set("Authorization", `Bearer ${userOne.tokens[0].token}`)
    .send({
      description: "Task created successfully",
      completed: "true",
    })
    .expect(201);

  const task = await Task.findById(response.body._id);
  expect(task).not.toBeNull();
});
