import express from "express";
import comments from "./comments";
import products from "./products";
import vehicle from "./vehicles";
import contacts from "./contacts";
import bodyParser from "body-parser";
import ContactRoutes from "./routes/ContactRoutes";
import VehiclesRoute from "./routes/VehiclesRoute";
import ProductsRoute from "./routes/ProductsRoute";
import CommentsRoute from "./routes/CommentsRoute";

import mongoose from "mongoose";
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/express-practice");

const app = express();

app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(VehiclesRoute);
app.use(ProductsRoute);
app.use(CommentsRoute);


const port = process.env.PORT || 3001;

app.get("/", function (request, response) {
  return response.json({hello: "world"});
});

app.post("/", function (request, response) {
  return response.json({hello: "post world"});
});

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
