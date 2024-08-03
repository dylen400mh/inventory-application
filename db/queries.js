const pool = require("./pool");

async function insertDepartment(name) {
  await pool.query("INSERT INTO department (name) VALUES ($1)", [name]);
}

async function getAllDepartments() {
  const { rows } = await pool.query("SELECT * FROM department");
  return rows;
}

async function getOneDepartment(id) {
  const { rows } = await pool.query("SELECT * FROM department WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function updateDepartment(id, name) {
  await pool.query("UPDATE department SET name = $1 WHERE id = $2", [name, id]);
}

async function deleteDepartment(id) {
  await pool.query("DELETE FROM department WHERE id = $1", [id]);
}

async function insertItem(department_id, name, price, quantity, description) {
  await pool.query(
    "INSERT INTO item (department_id, name, price, quantity, description) VALUES ($1,$2,$3,$4,$5)",
    [department_id, name, price, quantity, description]
  );
}

async function getItemsByDepartment(department_id) {
  const { rows } = await pool.query(
    "SELECT * FROM item WHERE department_id = $1",
    [department_id]
  );
  return rows;
}

async function getOneItem(id) {
  const { rows } = await pool.query("SELECT * FROM item WHERE id = $1", [id]);
  return rows[0];
}

async function updateItem(
  id,
  department_id,
  name,
  price,
  quantity,
  description
) {
  await pool.query(
    "UPDATE item SET department_id = $1, name = $2, price = $3, quantity = $4, description = $5 WHERE id = $6",
    [department_id, name, price, quantity, description, id]
  );
}

async function deleteItem(id) {
  await pool.query("DELETE FROM item WHERE id = $1", [id]);
}

module.exports = {
  insertDepartment,
  getAllDepartments,
  getOneDepartment,
  updateDepartment,
  deleteDepartment,
  insertItem,
  getItemsByDepartment,
  getOneItem,
  updateItem,
  deleteItem,
};
