const { Router } = require("express");
const {
  createDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  renderCreateDepartmentForm,
} = require("../controllers/departmentController");

const departmentsRouter = Router();

departmentsRouter.post("/", createDepartment);
departmentsRouter.get("/", getDepartments);
departmentsRouter.get("/create", renderCreateDepartmentForm);
departmentsRouter.get("/:id", getDepartment);
departmentsRouter.put("/:id", updateDepartment);
departmentsRouter.delete("/:id", deleteDepartment);

module.exports = departmentsRouter;
