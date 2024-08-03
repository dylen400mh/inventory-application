const db = require("../db/queries");

async function createItem(req, res) {
  try {
    const { department_id, name, price, quantity, description } = req.body;
    await db.insertItem(department_id, name, price, quantity, description);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function getItemsByDepartment(req, res) {
  try {
    const { department_id } = req.body;
    res.json(await db.getItemsByDepartment(department_id));
  } catch (error) {
    console.error(error);
  }
}

async function getItem(req, res) {
  try {
    const { id } = req.body;
    res.json(await db.getOneItem(id));
  } catch (error) {
    console.error(error);
  }
}

async function updateItem(req, res) {
  try {
    const { department_id, name, price, quantity, description } = req.body;
    await db.updateItem(department_id, name, price, quantity, description);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function deleteItem(req, res) {
  try {
    const { id } = req.body;
    await db.deleteItem(id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
};
