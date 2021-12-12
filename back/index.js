import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"

const app = express();
app.use('/posts', postRoutes)
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const CONNECTION_URL = "mongodb+srv://fawzeus:fawzeus@cluster0.wa9kd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(CONNECTION_URL, connectionParams)
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })


