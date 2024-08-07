const db = require("../db/queries");

async function createDepartment(req, res) {
  try {
    const { name, description } = req.body;
    await db.insertDepartment(name, description);
    res.redirect("/departments");
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
    const { id } = req.params;
    const { name, description } = req.body;
    await db.updateDepartment(id, name, description);
    res.redirect("/departments");
  } catch (error) {
    console.error(error);
  }
}

async function deleteDepartment(req, res) {
  try {
    const { id } = req.params;
    //delete items in department first
    await db.deleteItemsInDepartment(id);
    // then delete department
    await db.deleteDepartment(id);
    res.redirect("/departments");
  } catch (error) {
    console.error(error);
  }
}

async function renderCreateDepartmentForm(req, res) {
  res.render("createDepartment");
}

async function renderUpdateDepartmentForm(req, res) {
  const { id } = req.params;
  try {
    const department = await db.getOneDepartment(id);
    res.render("updateDepartment", { department });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  renderCreateDepartmentForm,
  renderUpdateDepartmentForm,
};
