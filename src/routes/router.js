import express from "express";
import { getCadastro, getCreate, getDelete, getDetalhes, getEditar, getIndex, postEditar } from "../controllers/jogocontrollers.js";

export const routes = express.Router();

routes.get("/", getIndex);

routes.get("/detalhes/:id", getDetalhes);

routes.get("/cadastro", getCadastro);

routes.post("/create", getCreate);

routes.get("/editar/:id", getEditar);

routes.post("/uptade/:id", postEditar);

routes.get("/deletar/:id", getDelete);