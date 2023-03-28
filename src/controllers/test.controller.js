const { request, response } = require("express");

const testGet = (req = request, res = response) => {
  const queryParams = req.query;
  res.json({
    message: "GET API Test Controller",
  });
};

const testPut = (req, res = response) => {
  res.json({
    message: "PUT API Test Controller",
  });
};
const testPost = (req, res = response) => {
  const body = req.body;
  res.json({
    message: "POST API Test Controller",
    body,
  });
};
const testPatch = (req, res = response) => {
  res.json({
    message: "PATCH API Test Controller",
  });
};

const testDelete = (req, res = response) => {
  res.json({
    message: "DELETE API Test Controller",
  });
};

module.exports = {
  testGet,
  testPut,
  testPost,
  testPatch,
  testDelete,
};
