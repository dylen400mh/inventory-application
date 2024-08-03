const db = require("../db/queries");

async function createDepartment(req, res) {
  const { name, description } = req.body;
  await db.insertDepartment(name, description);
  res.redirect("/");
}

async function getDepartments(req, res) {
  res.json(await db.getAllDepartments());
}

async function getDepartment(req, res) {
  const { id } = req.body;
  res.json(await db.getOneDepartment(id));
}

async function updateDepartment(req, res) {
  const { id, name, description } = req.body;
  await db.updateDepartment(id, name, description);
  res.redirect("/");
}

async function deleteDepartment(req, res) {
  const { id } = req.body;
  await db.deleteDepartment(id);
  res.redirect("/");
}

module.exports = {
  createDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
};
