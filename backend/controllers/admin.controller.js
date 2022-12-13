const db = require("../models");
const Siswa = db.siswa;

exports.validate = (req, res) => {
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
					validated: 1,
				})
				.then(() => {
					res.status(200).send({
						message: "Siswa validated sucessfully.",
					});
				});
		})
		.catch((err) => {
			res.status(500).send({ message: err.message });
		});
};
