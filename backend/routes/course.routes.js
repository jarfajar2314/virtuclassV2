const controller = require("../controllers/course.controller");

module.exports = function (app) {
	app.use(function (req, res, next) {
		res.header(
			"Access-Control-Allow-Headers",
			"x-access-token, Origin, Content-Type, Accept"
		);
		next();
	});

	app.get("/api/courses", controller.getAll);
	app.get("/api/course/detail/:id", controller.getCourse);
	app.post("/api/course/update/:id", controller.update);
	app.post("/api/course/create", controller.addCourse);
};
