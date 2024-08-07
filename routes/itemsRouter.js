const { Router } = require("express");
const {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
  renderCreateItemForm,
  renderUpdateItemForm,
} = require("../controllers/itemController");

const itemsRouter = Router();

itemsRouter.get("/department/:department_id/create", renderCreateItemForm);
itemsRouter.get("/update/:id", renderUpdateItemForm);
itemsRouter.post("/department/:department_id", createItem);
itemsRouter.get("/department/:department_id", getItemsByDepartment);
itemsRouter.get("/:id", getItem);
itemsRouter.post("/:id/update", updateItem);
itemsRouter.post("/:id/delete", deleteItem);

module.exports = itemsRouter;
