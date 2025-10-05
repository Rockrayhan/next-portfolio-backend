import express, { Request, Response } from "express";
import cors from "cors";
import authRoute from "./app/modules/auth/auth.route";
import blogRoute from "./app/modules/blog/blog.route";

const app = express();

app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to Resume builder server" });
});

// routes
app.use("/auth", authRoute);
app.use("/blogs", blogRoute);

export default app;
