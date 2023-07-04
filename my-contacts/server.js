console.log("Hello from server.js!");

const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

connectDb();
const app = express();

app.use(express.json());

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

async function startServer() {
  const getPort = await import("get-port");

  const preferredPort = process.env.PORT || 5000; // The preferred port you want to use
  let port = 0;
  while (port == 0) {
    port = await getPort.default({ port: preferredPort });
  }
  // Start your application
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();
