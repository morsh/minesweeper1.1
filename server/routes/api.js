const express = require('express');
const router = new express.Router();
const MinesweeperState = require('./cache');

router.post('/save', (req, res) => {

  const { board, game } = req.body;

  MinesweeperState.save({ board, game });

  res.send({ status: 'success' });
});

router.get('/load', (req, res) => {

  return res.send(MinesweeperState.load());

});

module.exports = {
  router
}