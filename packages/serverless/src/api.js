import express from "express";
import http from "serverless-http";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Home"
  });
});

app.get("/:name", (req, res) => {
  const {
    params: { name }
  } = req;

  res.json({
    message: `A very ServerLess Welcome, my dear ${name}.`
  });
});

export const serverless = http(app);
