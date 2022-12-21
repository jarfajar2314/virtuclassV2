const controller = require("../controllers/modul.controller");
const { authJwt } = require("../middleware");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get(
		"/api/moduls",
		// [authJwt.verifyToken, authJwt.isStudent],
		controller.getAll
	);

	app.post("/api/modul/create", controller.create);
	app.post("/api/modul/update/:id", controller.update);
	app.get("/api/modul/detail/:id", controller.getModul);
};
