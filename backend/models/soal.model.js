module.exports = (sequelize, Sequelize) => {
	const Soal = sequelize.define("question", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		isi_soal: {
			type: Sequelize.STRING,
		},
		pilihan_jawaban: {
			type: Sequelize.STRING,
		},
		kunci_jawaban: {
			type: Sequelize.STRING,
		},
		// id_submodul: {
		// 	type: Sequelize.INTEGER,

		// 	references: {
		// 		model: "submoduls",
		// 		key: "id",
		// 	},
		// },
	});

	return Soal;
};
