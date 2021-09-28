import express from "express";
const router = express.Router();

import {
  getCustomersAndSales,
  getCustomersAndSalesById,
  deleteCustomersAndSales,
  createCustomersAndSales,
  updateCustomersAndSales,
} from "../controllers/customersAndSalesController.js";

router.route("/").get(getCustomersAndSales).post(createCustomersAndSales);

router
  .route("/:id")
  .get(getCustomersAndSalesById)
  .delete(deleteCustomersAndSales)
  .put(updateCustomersAndSales);

export default router;
