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
    const game = await Jogos.findByPk(req.params.id);

    res.render("detalhes.ejs", { game });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getCadastro = (req, res) => {
  try {
    res.render("cadastro.ejs");
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getCreate = async (req, res) => {
  try {
    const newGame = req.body;

    if (!newGame) {
      return res.redirect("/cadastro");
    }

    await Jogos.create(newGame);

    res.redirect("/");
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getEditar = async (req, res) => {
  try {
    const jogo = await Jogos.findByPk(req.params.id);

    res.status(200).render("editar.ejs", { jogo });
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const postEditar = async (req, res) => {
  const { nome, imagem, descricao, preço, estoque, plataforma } = req.body;

  try {
    await Jogos.update(
      {
        nome: nome,
        imagem: imagem,
        descricao: descricao,
        preço: preço,
        estoque: estoque,
        plataforma: plataforma,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};

export const getDelete = async (req, res) => {
  try {
    await Jogos.destroy({
      where: { id: req.params.id },
    });

    res.status(200).redirect("/");
  } catch (err) {
    res.status(500).send({
      err: err.message,
    });
  }
};
