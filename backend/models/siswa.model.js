module.exports = (sequelize, Sequelize) => {
	const Siswa = sequelize.define("student", {
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
		jenisKelamin: {
			type: Sequelize.STRING,
		},
		asalSekolah: {
			type: Sequelize.STRING,
		},
		kelas: {
			type: Sequelize.STRING,
		},
		nomorTelp: {
			type: Sequelize.STRING,
		},
		profilPicture: {
			type: Sequelize.STRING,
		},
		kartuPelajar: {
			type: Sequelize.STRING,
		},
		validated: {
			type: Sequelize.INTEGER,
		},
	});

	return Siswa;
};
