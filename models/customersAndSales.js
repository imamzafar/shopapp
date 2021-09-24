import mongoose from "mongoose";

const customersAndSalesSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duedate: {
    type: Date,
  },

  // datewise
  totalCostOfShopping: {
    type: Number,
  },
});

const customersAndSales = mongoose.model(
  "customersAndSales",
  customersAndSalesSchema
);

export default customersAndSales;
