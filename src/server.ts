// server.ts
import dotenv from "dotenv";
import { connectDB } from "./config/db";

import app from "./app"; // ✅ import your app with routes
import { seedUsers } from "./seed/seedUsers";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();
  await seedUsers(); // automatically seed admin & owner if not exists

  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};

startServer();
