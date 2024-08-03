const { Router } = require("express");
const {
  createItem,
  getItemsByDepartment,
  getItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const itemsRouter = Router();

itemsRouter.post("/", createItem);
itemsRouter.get("/", getItemsByDepartment);
itemsRouter.get("/:id", getItem);
itemsRouter.put("/:id", updateItem);
itemsRouter.delete("/:id", deleteItem);

module.exports = itemsRouter;
