import Sequelize from "sequelize";

import { connect } from "../database/connection.js";

export const Jogos = connect.define(
  "jogos",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    preço: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    plataforma: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    genero: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    imagem: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
);

