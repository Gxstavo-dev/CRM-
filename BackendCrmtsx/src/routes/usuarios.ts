import express from "express";

const routes = express.Router();
routes.post("/login");
routes.post("/register");

export default routes;
