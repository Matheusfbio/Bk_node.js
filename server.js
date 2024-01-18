import { fastify } from "fastify";
import createServer from "node:http";
import { DatabasePostgres } from "./database-postgres.js";

export const server = fastify();

const database = new DatabasePostgres();

// CRUD TASKS

server.post("/tasks", async (request, reply) => {
  const { title, description, status } = request.body;

  await database.create({
    title,
    description,
    status,
  });

  return reply.status(201).send();
});

server.get("/tasks", async (request) => {
  const search = request.query.search;

  const tasks = await database.tasksList(search);

  return tasks;
});

server.put("/tasks/:id", async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, status } = request.body;

  await database.update(videoId, {
    title,
    description,
    status,
  });

  return reply.status(204).send();
});

server.delete("/tasks/:id", async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

// CRUD PEOPLE
//Create
server.post("/people", async (request, reply) => {
  const { username, old } = request.body;

  await database.create({
    username,
    old,
  });

  return reply.status(201).send();
});

//Read
server.get("/people", async (request) => {
  const search = request.query.search;

  const people = await database.peopleList(search);

  return people;
});

//Update
server.put("/people/:id", async (request, reply) => {
  const peopleId = request.params.id;
  const { username, old } = request.body;

  await database.update(peopleId, {
    username,
    old,
  });

  return reply.status(204).send();
});

//Delete
server.delete("/people/:id", async (request, reply) => {
  const peopleId = request.params.id;

  await database.delete(peopleId);

  return reply.status(204).send();
});

server.listen({
  host: "0.0.0.0",
  port: process.env.PORT ?? 3333,
  messeger: console.log("API is running"),
});
