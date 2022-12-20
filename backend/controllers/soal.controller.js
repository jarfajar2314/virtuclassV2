const db = require("../models");
const Soal = db.soal;

exports.create = (req, res) => {
	Soal.create({
		idModul: req.body.idModul,
		soal: req.body.soal,
		pilihan: JSON.stringify(req.body.pilihan),
		jawaban: req.body.jawaban,
	})
		.then(() => {
			res.status(200).send({
				message: "Soal was created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.getSoal = (req, res) => {
	Soal.findAll({
		where: {
			idModul: req.query.modul,
		},
	})
		.then((soal) => {
			if (!soal.length) {
				return res.status(404).send({
					message: "Soal not found.",
				});
			}
			soal.forEach((eachSoal) => {
				eachSoal.pilihan = JSON.parse(eachSoal.pilihan);
			});
			res.status(200).send({
				message: "Soal fetched successfully.",
				count: soal.length,
				data: soal,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.update = (req, res) => {
	Modul.update(
		{
			...req.body,
		},
		{
			where: {
				id: req.query.modul,
			},
		}
	)
		.then((result) => {
			if (!result[0]) {
				return res.status(404).send({
					message: "Soal with specified id not found.",
				});
			}
			res.status(200).send({ message: "Soal updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
