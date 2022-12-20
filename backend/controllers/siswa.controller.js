const db = require("../models");
const Siswa = db.siswa;
const bcrypt = require("bcryptjs");
const Nilai = db.nilai;

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

exports.getAll = (req, res) => {
	Siswa.findAll()
		.then((siswa) => {
			if (!siswa) {
				return res.status(404).send({
					message: "Siswa not found.",
				});
			}

			res.status(200).send({
				message: "Siswa fetched successfully.",
				count: siswa.length,
				data: siswa,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.getNilai = (req, res) => {
	Siswa.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Nilai,
				where: {
					id_siswa: req.params.id,
				},
				required: false,
			},
		],
	})
		.then((siswa) => {
			if (!siswa) {
				return res.status(404).send({
					message: "Siswa not found.",
				});
			}

			res.status(200).send({
				message: "Siswa fetched successfully.",
				data: siswa,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
