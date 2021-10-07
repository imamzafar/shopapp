import express from "express";
const router = express.Router();
import {
  getBalanceSheetInfo,
  addBalance,
  deleteACustomerBalanceById,
  updateACustomerBalanceById,
} from "../controllers/balanceSheetController.js";

router.route("/").get(getBalanceSheetInfo).post(addBalance);

router
  .route("/:id")
  .delete(deleteACustomerBalanceById)
  .put(updateACustomerBalanceById);

export default router;
