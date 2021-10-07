import asyncHandler from "express-async-handler";
import BalanceSheet from "../models/balanceSheetModel.js";

const getBalanceSheetInfo = asyncHandler(async (req, res) => {
  const balanceSheetInfo = await BalanceSheet.find({});
  res.json(balanceSheetInfo);
});

const addBalance = asyncHandler(async (req, res) => {
  const { customerName, due } = req.body;

  const balance = await BalanceSheet.create({
    customerName,
    due,
  });

  if (balance) {
    res.status(201).json({
      _id: balance._id,
      name: balance.customerName,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateACustomerBalanceById = asyncHandler(async (req, res) => {
  const balance = await BalanceSheet.findById(req.params.id);

  if (balance) {
    balance.customerName = req.body.customerName || balance.customerName;
    balance.due = req.body.due || balance.due;

    const updatedBalance = await balance.save();

    res.json({
      _id: updatedBalance._id,
      customerName: updatedBalance.customerName,
      due: updatedBalance.due,
    });
  } else {
    res.status(404);
    throw new Error("Balance Id not found");
  }
});

const deleteACustomerBalanceById = asyncHandler(async (req, res) => {
  const balance = await BalanceSheet.findById(req.params.id);

  if (balance) {
    await balance.remove();
    res.json({
      message: "Balance removed",
    });
  } else {
    res.status(404);
    throw new Error("Custommer balance not found");
  }
});

export {
  getBalanceSheetInfo,
  addBalance,
  deleteACustomerBalanceById,
  updateACustomerBalanceById,
};
