const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

// CREATE
router.post('/create', product_controller.product_create);

// READ
router.get('/:id', product_controller.product_details);

// UPDATE
router.put('/:id/update', product_controller.product_update);

// DELETE
router.delete('/:id/delete', product_controller.product_delete);