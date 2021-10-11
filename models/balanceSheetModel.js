import mongoose from "mongoose";

const balanceSheetSchema = mongoose.Schema(
  {
    FinalDrawerMoney: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const BalanceSheet = mongoose.model("BalanceSheet", balanceSheetSchema);

export default BalanceSheet;


