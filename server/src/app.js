import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import mainRoutes from "./routes/mainRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", mainRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to MovieExplorer API!");
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

export default app;