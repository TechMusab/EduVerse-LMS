import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import userRoute from "./routes/userRoute.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
// Connect to MongoDB
connectDB(process.env.MONGO_URI);
// Routes
app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
