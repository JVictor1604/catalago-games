import express from "express";
import { getDetalhes, getIndex } from "../controllers/jogocontrollers.js";

export const routes = express.Router();

routes.get("/", getIndex);

routes.get("/detalhes/:id", getDetalhes);
