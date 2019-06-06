require('dotenv').config();

const express = require('express');

const { checkAuth } = require('./middleware/authentication');
const { protectRoutes } = require('./middleware/protectRoute');
const adminHandler = require('./accountsMangment/admin');
const { getCustomer } = require('./accountsMangment/customer/getCustomers');
const customerHandler = require('./accountsMangment/customer');
const orderHandler = require('./order');

const router = express.Router();
router.route('/customers').get(getCustomer);
router.use(checkAuth);
// the all routes start from here

router.use(adminHandler);

router.use(protectRoutes);
// the protected route start from here

router.use(customerHandler);
router.use(orderHandler);

module.exports = router;
