const db = require("../models");
const SubModul = db.submodul;

exports.create = (req, res) => {
	SubModul.create({
		judul: req.body.judul,
		content: req.body.content,
		id_modul: 1,
	})
		.then(() => {
			res.status(200).send({
				message: "Submodul was created successfully.",
			});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
