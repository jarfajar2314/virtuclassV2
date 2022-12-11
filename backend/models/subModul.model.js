module.exports = (sequelize, Sequelize) => {
	const SubModul = sequelize.define("submodul", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		judul: {
			type: Sequelize.STRING,
		},
		content: {
			type: Sequelize.STRING,
		},
		id_modul: {
			type: Sequelize.INTEGER,

			references: {
				model: "moduls",
				key: "id",
			},
		},
	});

	return SubModul;
};
