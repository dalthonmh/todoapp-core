require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/tasks");
const yaml = require("yamljs");
const swaggerUI = require("swagger-ui-express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = yaml.load("./openapi.yaml");

connectDB(process.env.MONGODB_URI);

app.use(
  cors({
    origin: "*", // o 'http://web:8080' para ser más seguro
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/tasks", taskRoutes);
app.use("/api/tasks/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get("/api/tasks/health", (req, res) => {
  res.send("Todo List Microservice is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
