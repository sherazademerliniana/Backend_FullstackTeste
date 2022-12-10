import express from "express";
import { userRouter } from "./routes/user.routes";
import { clientRouter } from "./routes/client.routes";
import { loginRouter } from "./routes/login.routes";

const app = express();

app.use(express.json());

app.use("/users", userRouter);
app.use("/clients", clientRouter);
app.use("/login", loginRouter);

export default app;
