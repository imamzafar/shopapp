import asyncHandler from "express-async-handler";
import BalanceSheet from "../models/balanceSheetModel.js";

const getBalanceSheetInfo = asyncHandler(async (req, res) => {
  const balanceSheetInfo = await BalanceSheet.find({});
  res.json(balanceSheetInfo);
});

const addBalance = asyncHandler(async (req, res) => {
  const { FinalDrawerMoney } = req.body;

  const balance = await BalanceSheet.create({
    FinalDrawerMoney,
  });

  if (balance) {
    res.status(201).json({
      _id: balance._id,
      FinalDrawerMoney: balance.FinalDrawerMoney,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateACustomerBalanceById = asyncHandler(async (req, res) => {
  const balance = await BalanceSheet.findById(req.params.id);

  if (balance) {
    balance.FinalDrawerMoney =
      req.body.FinalDrawerMoney || balance.FinalDrawerMoney;

    const updatedBalance = await balance.save();

    res.json({
      _id: updatedBalance._id,
      FinalDrawerMoney: updatedBalance.FinalDrawerMoney,
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
