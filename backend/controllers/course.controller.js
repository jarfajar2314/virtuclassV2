const db = require("../models");
const Course = db.course;

exports.addCourse = (req, res) => {
	Course.create({});
};
exports.update = (req, res) => {
	Course.create({});
};
exports.getAll = (req, res) => {
	Course.findAll().then((courses) => {
		if (!courses) {
			return res.status(404).send({
				message: "Course not found.",
			});
		}

		res.status(200).send({
			count: courses.length,
			data: courses,
		});
	});
};
exports.getCourse = (req, res) => {
	Course.create({});
};
