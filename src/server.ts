import express from "express"
import categoriesRoutes from "./routes/categories.routes";
import specRouter from "./routes/specs.route";

const app = express()
app.use(express.json());
app.use("/categories", categoriesRoutes)
app.use('/specs', specRouter)
app.listen(3333)