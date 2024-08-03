const db = require("../db/queries");

async function createItem(req, res) {
  const { department_id, name, price, quantity, description } = req.body;
  await db.insertItem(department_id, name, price, quantity, description);
  res.redirect("/");
}

async function getItemsByDepartment(req, res) {
  const { department_id } = req.body;
  res.json(await db.getItemsByDepartment(department_id));
}

async function getItem(req, res) {
  const { id } = req.body;
  res.json(await db.getOneItem(id));
}

async function updateItem(req, res) {
  const { department_id, name, price, quantity, description } = req.body;
  await db.updateItem(department_id, name, price, quantity, description);
  res.redirect("/");
}

async function deleteItem(req, res) {
  const { id } = req.body;
  await db.deleteItem(id);
  res.redirect("/");
}

module.exports = {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
};
