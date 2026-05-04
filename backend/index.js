import "dotenv/config";
import mongoose from "mongoose";
import { config } from "./config.js";
import { createApp } from "./app.js";
import { bootstrapData } from "./seed/bootstrap.js";

const app = createApp();

/** Railway/cloud sets PORT exactly — do not hop ports in production. */
const allowPortFallback =
  process.env.NODE_ENV !== "production" && !process.env.RAILWAY_ENVIRONMENT && !process.env.RENDER;

async function main() {
  /** 
   * Start server immediately so Railway/cloud binds the port.
   * This prevents 502 Bad Gateway timeouts during DB connection.
   */
  startServer(config.port);

  let dbConnected = false;
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(config.mongoUri, { serverSelectionTimeoutMS: 5000 });
    dbConnected = true;
    console.log("MongoDB connected successfully.");
    await bootstrapData();
  } catch (err) {
    console.error("MongoDB connection failed.");
    console.error(err);
    console.error(
      "If you are using MongoDB Atlas and see 'querySrv', try a non-SRV connection string (mongodb://...) from Atlas, or change networks/DNS."
    );
  }
}

const startServer = (port, attemptsLeft = 10) => {
  const server = app.listen(port, "0.0.0.0", () => {
    const host = config.publicHost || "localhost";
    console.log(`API listening on port ${port} (PUBLIC_HOST=${host})`);
  });

  server.on("error", (err) => {
    if (allowPortFallback && err?.code === "EADDRINUSE" && attemptsLeft > 0) {
      const nextPort = port + 1;
      console.warn(`Port ${port} in use; trying ${nextPort}...`);
      server.close(() => startServer(nextPort, attemptsLeft - 1));
      return;
    }
    throw err;
  });
};

main().catch((err) => {
  console.error(err);
  console.error("Fatal startup error (API not running).");
});
