module.exports = (sequelize, Sequelize) => {
	const Admin = sequelize.define("admin", {
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

	return Admin;
};
