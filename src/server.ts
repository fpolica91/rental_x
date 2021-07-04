import express from "express"
import routes from './routes/routes'
import categoriesRoutes from "./routes/categories.routes";

const app = express()
app.use(express.json());
app.use(routes)
app.use("/categories", categoriesRoutes)

app.listen(3333)