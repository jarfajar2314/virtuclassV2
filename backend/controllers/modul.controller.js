const db = require("../models");
const Modul = db.modul;
const Submodul = db.submodul;

exports.create = (req, res) => {
	Modul.create({
		judul: req.body.judul,
		deskripsi: req.body.deskripsi,
		kelas: req.body.kelas,
	})
		.then(() => {
			res.status(200).send({
				message: "Modul was created successfully.",
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
				id: req.params.id,
			},
		}
	)
		.then((result) => {
			if (!result[0]) {
				return res.status(404).send({
					message: "Modul with specified id not found.",
				});
			}
			res.status(200).send({ message: "Modul updated successfully." });
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.getAll = (req, res) => {
	var getModuls = Modul.findAll();
	if (req.query.kelas) {
		getModuls = Modul.findAll({
			where: {
				kelas: req.query.kelas,
			},
		});
	}
	getModuls
		.then((moduls) => {
			if (!moduls) {
				return res.status(404).send({
					message: "Modul not found.",
				});
			}

			res.status(200).send({
				message: "Moduls fetched successfully.",
				count: moduls.length,
				data: moduls,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};

exports.getModul = (req, res) => {
	Modul.findOne({
		where: {
			id: req.params.id,
		},
		include: [
			{
				model: Submodul,
				where: {
					id_modul: req.params.id,
				},
				required: false,
			},
		],
	})
		.then((modul) => {
			if (!modul) {
				return res.status(404).send({
					message: "Modul not found.",
				});
			}

			modul.submoduls.forEach((submodul) => {
				submodul.materi = JSON.parse(submodul.materi);
			});

			res.status(200).send({
				message: "Modul fetched successfully.",
				data: modul,
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
