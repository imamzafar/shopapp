import mongoose from "mongoose";

const salesSchema = mongoose.Schema(
  {
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
        // name: { type: String, required: true },
        qty: { type: Number, required: true },
        rate: { type: Number, required: true },
        qtytype: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const customersAndSalesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  sales: salesSchema,
  total: {
    type: Number,
  },
  due: {
    type: Number,
  },
});

const customersAndSales = mongoose.model(
  "customersAndSales",
  customersAndSalesSchema
);

export default customersAndSales;
