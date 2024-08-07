const { Router } = require("express");
const {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
  renderCreateItemForm,
} = require("../controllers/itemController");

const itemsRouter = Router();

itemsRouter.get("/department/:department_id/create", renderCreateItemForm);
itemsRouter.post("/department/:department_id", createItem);
itemsRouter.get("/department/:department_id", getItemsByDepartment);
itemsRouter.get("/:id", getItem);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);

module.exports = itemsRouter;
