const { Router } = require("express");
const {
  createDepartment,
  getDepartment,
  getDepartments,
  updateDepartment,
  deleteDepartment,
  renderCreateDepartmentForm,
  renderUpdateDepartmentForm,
} = require("../controllers/departmentController");

const departmentsRouter = Router();

departmentsRouter.post("/", createDepartment);
departmentsRouter.get("/", getDepartments);
departmentsRouter.get("/create", renderCreateDepartmentForm);
departmentsRouter.get("/update/:id", renderUpdateDepartmentForm);
departmentsRouter.get("/:id", getDepartment);
departmentsRouter.post("/:id/update", updateDepartment);
departmentsRouter.post("/:id/delete", deleteDepartment);

module.exports = departmentsRouter;
