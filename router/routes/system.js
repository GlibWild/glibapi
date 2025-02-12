const express = require("express");
const router = express.Router();
const authMiddleware = require("../../middleware/authMiddleware");
const systemController = require("../../controllers/systemController");
router.use(authMiddleware.verifyToken);

router.get("/system", systemController.hello);
router.get("/log", systemController.log);

module.exports = router;
