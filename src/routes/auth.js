const express = require('express');

const router = express.Router();

const { response } = require('../strings');

const getDBError = require('../helpers/getDBError');
const hash = require('../helpers/hash');
const User = require('../models/User');
const { createSuccess, createError } = require('../helpers/response');

router.get('/login', async (req, res) => {
  const { body: { username, password } } = req;

  try {
    await User.findOne({
      username,
      password: hash(password),
    });
    return res.send(createSuccess({
      token: '',
    }));
  } catch (e) {
    return res.status(500).send(createError(response[500]));
  }
});

router.post('/signup', async (req, res) => {
  const {
    body: {
      user: {
        name,
        email,
        username,
        password,
      },
    },
  } = req;

  try {
    const newUser = await User.create({
      name,
      email,
      username,
      password,
    });
    return res.status(200).send(createSuccess({
      name: newUser.name,
      email: newUser.email,
      username: newUser.username,
    }));
  } catch (e) {
    return res.status(500).send(createError(getDBError(e)));
  }
});

module.exports = router;
