const router = require("express").Router();
const alertsController = require("../../controllers/alertsController");

// Matches with "/api/books"
router.route("/")
  .get(alertsController.findAll)
  .post(alertsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(alertsController.findById)
  .put(alertsController.update)
  .delete(alertsController.remove);

module.exports = router;
