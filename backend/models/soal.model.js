module.exports = (sequelize, Sequelize) => {
	const Soal = sequelize.define("question", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		soal: {
			type: Sequelize.TEXT,
		},
		jawaban: {
			type: Sequelize.INTEGER,
		},
		pilihan: {
			type: Sequelize.TEXT,
		},
		idModul: {
			type: Sequelize.INTEGER,

			references: {
				model: "moduls",
				key: "id",
			},
		},
	});

	return Soal;
};
