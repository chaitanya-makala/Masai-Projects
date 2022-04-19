<<<<<<< HEAD
<<<<<<< HEAD
const Ranking = require('../Models/ranking.model');
const express = require('express');

const router = express.Router();

router.post('', async (req, res) => {
=======
=======
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
const Ranking = require("../Models/ranking.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
<<<<<<< HEAD
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
  try {
    const ranking = await Ranking.create(req.body);
    return res.status(200).send(ranking);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
router.get('', async (req, res) => {
=======
router.get("", async (req, res) => {
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
router.get("", async (req, res) => {
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
  try {
    const ranking = await Ranking.find().lean().exec();
    return res.status(200).send(ranking);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
router.get('/:id', async (req, res) => {
=======
router.get("/:id", async (req, res) => {
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
router.get("/:id", async (req, res) => {
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
  try {
    const ranking = await Ranking.findById(req.params.id);
    return res.status(200).send(ranking);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
router.patch('/:id', async (req, res) => {
=======
router.patch("/:id", async (req, res) => {
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
router.patch("/:id", async (req, res) => {
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
  try {
    const ranking = await Ranking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    return res.status(200).send(ranking);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

<<<<<<< HEAD
<<<<<<< HEAD
router.delete('/:id', async (req, res) => {
=======
router.delete("/:id", async (req, res) => {
>>>>>>> 4af8c24708255c4227f26351d2f75b9c8e36e229
=======
router.delete("/:id", async (req, res) => {
>>>>>>> 40ee7dbc56a2c171a9633d757c493d4a7758d66b
  try {
    const ranking = await Ranking.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(ranking);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
