import mongoose from "mongoose";

const balanceSheetSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    due: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BalanceSheet = mongoose.model("BalanceSheet", balanceSheetSchema);

export default BalanceSheet;


