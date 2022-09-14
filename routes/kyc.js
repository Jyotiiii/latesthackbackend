var express = require('express');
var router = express.Router();
var kycApi = require('../controllers/kyc');
/* GET home page. */
console.log("jyoti")
router.post('/emailverify', kycApi.emailverify);
router.post('/grandAccess', kycApi.grandAccess);
router.post('/RegisterUser', kycApi.RegisterUser);
router.post('/QueryReceiverInfo', kycApi.QueryReceiverInfo);
router.post('/RegisterAdmin', kycApi.RegisterAdmin); //done
module.exports = router;

