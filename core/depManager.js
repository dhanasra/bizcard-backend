// DB
const USER = require("../models/user.model");
const CARD = require("../models/card.model");
const CONTACT = require("../models/contact.model");
const BACKGROUND = require("../models/background.model");
const CONFIG = require("../models/config.model");

const depManager = {
  // DB
  USER,
  CARD,
  CONTACT,
  BACKGROUND,
  CONFIG
};

module.exports = depManager;
