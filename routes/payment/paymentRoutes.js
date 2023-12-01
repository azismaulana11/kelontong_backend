const midtransClient = require('midtrans-client');
const express = require('express');
const router = express.Router();
require('dotenv').config();

// Controller
const paymentController = require('../../Controllers/payment/paymentController');

router.post('/process-transactions', (req, res) => {
    try {
        const snap = new midtransClient.Snap({
            isProduction: false,
            serverKey: process.env.MIDTRANS_SERVER_KEY,
            clientKey: process.env.MIDTRANS_CLIENT_KEY,
        });

        const parameter = {
            "transaction_details": {
                "order_id": req.body.order_id,
                "gross_amount": req.body.total
            },
            "customer_details": {
                "first_name": req.body.name,
            },
            "callbacks": {
                "finish": "http://localhost:5173/payment-success"
            }
        };

        snap.createTransaction(parameter)
            .then((transaction) => {
                const dataPayment = {
                    response: JSON.stringify(transaction),
                }
                const token = transaction.token;
                res.json({
                    message: 'Success',
                    dataPayment,
                    token: token,
                });
            });
    } catch (error) {
        console.log(error)
    }
});

router.put('/:id', paymentController.updateStatusOrder);


module.exports = router;
