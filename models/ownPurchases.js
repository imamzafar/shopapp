import mongoose from "mongoose";

const ownPurchasesSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
  },
  dueAmount: {
    type: Number,
  },
});

const ownPurchasesSchema = mongoose.model(
  "ownPurchasesSchema",
  ownPurchasesSchema
);

export default ownPurchasesSchema;
