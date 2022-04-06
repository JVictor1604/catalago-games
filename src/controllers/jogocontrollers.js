import { Jogos } from "../models/jogos.js";

export const getIndex = async (req, res) => {
  try {
    const game = await Jogos.findAll();
    res.render("index.ejs", {
      game,
    });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getDetalhes = async (req, res) => {
  try {
    
    const id = Number(req.params.id);
    const game = await Jogos.findByPk(req.params.id)

    res.render("detalhes.ejs", { game });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};
