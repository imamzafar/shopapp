import asyncHandler from "express-async-handler";
import CustomersAndSales from "../models/customersAndSalesModel.js";

const getCustomersAndSales = asyncHandler(async (req, res) => {
  const customersAndSales = await CustomersAndSales.find({});

  res.status(200).json({ customersAndSales });
});

const getCustomersAndSalesById = asyncHandler(async (req, res) => {
  const customerAndSales = await CustomersAndSales.findById(req.params.id);

  if (customerAndSales) {
    res.json(customerAndSales);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const deleteCustomersAndSales = asyncHandler(async (req, res) => {
  const customerAndSales = await CustomerAndSales.findById(req.params.id);

  if (customerAndSales) {
    await customerAndSales.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const createCustomersAndSales = asyncHandler(async (req, res) => {
  const { orderItems, user, due, total } = req.body;
  const customersAndSales = new CustomersAndSales({
    // userid
    user,
    sales: {
      orderItems,
    },
    due,
    total,
  });
  //   customerName
  const createCustomerAndSales = await customersAndSales.save();
  res.status(201).json(createCustomerAndSales);
});

const updateCustomersAndSales = asyncHandler(async (req, res) => {
  const { productName, costPerUnit, totalQuantity } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.productName = productName;
    product.costPerUnit = costPerUnit;
    product.totalQuantity = totalQuantity;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getCustomersAndSales,
  getCustomersAndSalesById,
  deleteCustomersAndSales,
  createCustomersAndSales,
  updateCustomersAndSales,
};
