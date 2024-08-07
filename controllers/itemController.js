const db = require("../db/queries");

async function createItem(req, res) {
  try {
    const { department_id } = req.params;
    const { name, price, quantity, description } = req.body;
    await db.insertItem(department_id, name, price, quantity, description);
    res.redirect("/items/department/" + department_id);
  } catch (error) {
    console.error(error);
  }
}

async function getItemsByDepartment(req, res) {
  try {
    const { department_id } = req.params;
    items = await db.getItemsByDepartment(department_id);
    res.render("items", { items, department_id });
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
    const { id } = req.params;
    const { department_id, name, price, quantity, description } = req.body;
    await db.updateItem(id, department_id, name, price, quantity, description);
    res.redirect("/items/department/" + department_id);
  } catch (error) {
    console.error(error);
  }
}

async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    const { department_id } = req.body;
    await db.deleteItem(id);
    res.redirect("/items/department/" + department_id);
  } catch (error) {
    console.error(error);
  }
}

async function renderCreateItemForm(req, res) {
  const { department_id } = req.params;
  res.render("createItem", { department_id });
}

async function renderUpdateItemForm(req, res) {
  const { id } = req.params;
  try {
    const item = await db.getOneItem(id);
    res.render("updateItem", { item });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
  renderCreateItemForm,
  renderUpdateItemForm,
};
