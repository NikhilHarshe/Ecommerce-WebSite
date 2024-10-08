const express = require("express")
const router = express.Router()

const { capturePayment, verifyPayment, tempdata } = require("../controlers/Payments");

router.post("/capturePayment", capturePayment);
router.post("/verifyPayment", verifyPayment);
router.post("/tempdata", tempdata);

module.exports = router