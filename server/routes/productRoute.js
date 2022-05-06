const Router = require('express')
const ProductController = require('../controllers/productController')

const router = new Router()

router.route('/products').get(ProductController.getAllProducts)
router.route('/admin7531/product/new').post(ProductController.createProduct)
router.route('/product/:id').get(ProductController.getSingleProduct)
router.route('/products/:slug').get(ProductController.getCategoryProduct)

module.exports = router