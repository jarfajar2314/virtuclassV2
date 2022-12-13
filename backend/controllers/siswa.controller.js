const db = require("../models");
const Siswa = db.siswa;
const bcrypt = require("bcryptjs");

exports.lihat = (req, res) => {
	Siswa.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((siswa) => {
			if (!siswa) {
				return res.status(404).send({
					message: `id Siswa: ${req.params.id} not found.`,
				});
			}

			res.status(200).send({
				message: "Siswa found.",
				...siswa.dataValues,
				// { ...siswa.dataValues },
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.update = (req, res) => {
	Siswa.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((siswa) => {
			if (!siswa) {
				return res.status(404).send({
					message: `id Siswa: ${req.params.id} not found.`,
				});
			}
			siswa
				.update({
					...req.body,
				})
				.then(() => {
					if (req.body.password) {
						siswa
							.update({
								password: bcrypt.hashSync(req.body.password, 8),
							})
							.then(() => {
								res.status(200).send({
									message: "Siswa updated sucessfully.",
								});
							})
							.catch((err) => {
								res.status(500).send({ message: err.message });
							});
					} else {
						res.status(200).send({
							message: "Siswa updated sucessfully.",
						});
					}
				});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
