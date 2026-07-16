const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const { authGuard } = require('../middlewares/authGuard'); 
const multer = require('multer');


const upload = multer({ storage: multer.memoryStorage() });

router.post('/image', authGuard, upload.single("image"), uploadController.uploadImage);

module.exports = router;