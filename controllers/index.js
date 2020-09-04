var express = require('express');

const ping = function (req, res, next) {
  return res.status(200).json({ ping: 'ok' });
};

module.exports = {
  ping,
}