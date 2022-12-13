const db = require("../models");
const Course = db.course;

exports.addCourse = (req, res) => {
	Course.create({});
};
exports.update = (req, res) => {
	Course.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((course) => {
			if (!course) {
				return res.status(404).send({
					message: "Course not found.",
				});
			}

			course
				.update({
					...req.body,
				})
				.then(() => {
					res.status(200).send({
						message: "Course updated successfully.",
					});
				})
				.catch((err) => {
					res.status(500).send({ message: err.message });
				});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
exports.getAll = (req, res) => {
	Course.findAll()
		.then((courses) => {
			if (!courses) {
				return res.status(404).send({
					message: "Course not found.",
				});
			}

			res.status(200).send({
				message: "Courses fetched successfully.",
				count: courses.length,
				data: courses,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
exports.getCourse = (req, res) => {
	Course.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((course) => {
			if (!course) {
				return res.status(404).send({
					message: "Course not found.",
				});
			}

			res.status(200).send({
				message: "Course fetched successfully.",
				data: course,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
