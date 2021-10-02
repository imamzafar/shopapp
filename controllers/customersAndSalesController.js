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
  const customerAndSales = await CustomersAndSales.findById(req.params.id);

  if (customerAndSales) {
    await customerAndSales.remove();
    res.json({ message: "customerAndSales removed" });
  } else {
    res.status(404);
    throw new Error("customerAndSales not found");
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
  const { orderItems, user, due, total } = req.body;

  const customersAndSales = await CustomersAndSales.findById(req.params.id);

  if (customersAndSales) {
    customersAndSales.user = user;
    customersAndSales.sales = { orderItems };
    customersAndSales.due = due;
    customersAndSales.total = total;

    const updatedCustomersAndSales = await customersAndSales.save();
    res.json(updatedCustomersAndSales);
  } else {
    res.status(404);
    throw new Error("Customers and sales not found");
  }
});

export {
  getCustomersAndSales,
  getCustomersAndSalesById,
  deleteCustomersAndSales,
  createCustomersAndSales,
  updateCustomersAndSales,
};
