import express from 'express';
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'
const corsMiddleware = require('./cors');

const app = express();

app.use(express.json());
app.use(corsMiddleware);

app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)

mongoose.connect("mongodb+srv://hristotr:hristotr@cluster0.dvtknbo.mongodb.net/recipes?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to db");
}).catch(err => {
    console.log(err);
});

app.listen(4000, () => console.log("SERVER STARTED"));