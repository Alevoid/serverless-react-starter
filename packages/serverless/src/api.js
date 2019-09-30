import express from "express";
import http from "serverless-http";

const app = express();

app.get("/greeting", (req, res) => {
  res.json({
    message: `A very ServerLess Welcome, my dear user.`
  });
});

export const serverless = http(app);
