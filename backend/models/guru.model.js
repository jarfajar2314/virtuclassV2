module.exports = (sequelize, Sequelize) => {
	const Guru = sequelize.define("teacher", {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		email: {
			type: Sequelize.STRING,
		},
		password: {
			type: Sequelize.STRING,
		},
		nama: {
			type: Sequelize.STRING,
		},
	});

	return Guru;
};
