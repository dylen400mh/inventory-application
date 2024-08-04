const db = require("../db/queries");

async function createDepartment(req, res) {
  try {
    const { name, description } = req.body;
    await db.insertDepartment(name, description);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function getDepartments(req, res) {
  try {
    departments = await db.getAllDepartments();
    res.render("departments", { departments });
  } catch (error) {
    console.error(error);
  }
}

async function getDepartment(req, res) {
  try {
    const { id } = req.body;
    res.json(await db.getOneDepartment(id));
  } catch (error) {
    console.error(error);
  }
}

async function updateDepartment(req, res) {
  try {
    const { id, name, description } = req.body;
    await db.updateDepartment(id, name, description);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

async function deleteDepartment(req, res) {
  try {
    const { id } = req.body;
    await db.deleteDepartment(id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  createDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
};
