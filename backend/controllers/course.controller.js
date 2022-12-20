const db = require("../models");
const Course = db.course;

exports.addCourse = (req, res) => {
	Course.create({
		nama: req.body.nama,
		description: req.body.description,
		kelas: req.body.kelas,
		backgroundImage: req.body.backgroundImage,
		id_guru: req.body.id_guru,
	})
		.then(() => {
			res.status(200).send({
				message: "Course created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
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
	var getCourses = Course.findAll();
	if (req.query.kelas) {
		getCourses = Course.findAll({
			where: {
				kelas: req.query.kelas,
			},
		});
	}
	getCourses
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

exports.getByKelas = (req, res) => {
	Course.findAll({
		where: {
			kelas: req.body.kelas,
		},
	})
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
		// include: [{
		// 	model:
		// }]
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
