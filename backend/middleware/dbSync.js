const { guru } = require("../models");
const db = require("../models");

init = () => {
	db.sequelize.sync({ force: true }).then(() => {
		console.log("Drop and Resync Db");
		initial();
	});

	const Admin = db.admin;
	const Siswa = db.siswa;
	const Course = db.course;
	const Guru = db.guru;
	const bcrypt = require("bcryptjs");
	function initial() {
		Admin.create({
			nama: "admin",
			email: "admin@mail.com",
			password: bcrypt.hashSync("123456", 8),
		});

		Siswa.create({
			nama: "Roger Sumatra",
			asalSekolah: "SMPN 2 Bandung",
			jenisKelamin: "L",
			email: "rogersumatra@mail.com",
			password: bcrypt.hashSync("123123123", 8),
			role: "siswa",
			nomorTelp: "081234567890",
			kelas: "IX",
			kartuPelajar: "kartupelajar.jpg",
			validated: 0,
		});

		Siswa.create({
			nama: "Agus Tiger",
			asalSekolah: "SMPN 3 Bandung",
			jenisKelamin: "L",
			email: "agustiger@mail.com",
			password: bcrypt.hashSync("123123", 8),
			role: "siswa",
			nomorTelp: "081234567890",
			kelas: "IX",
			kartuPelajar: "kartupelajar.jpg",
			validated: 0,
		});

		Guru.create({
			id: 1,
			nama: "Muhammad Sumbul",
			email: "muhammadsumbul@mail.com",
			password: bcrypt.hashSync("111111", 8),
		});

		Guru.create({
			id: 2,
			nama: "Khalid Kashmiri",
			email: "khalidkashmiri@mail.com",
			password: bcrypt.hashSync("111111", 8),
		});

		Course.create({
			nama: "Kimia Dasar",
			description: "Lorem Ipsum Dolor Sit Amet.",
			kelas: "IX",
			backgroundImage: "kimia.jpg",
			id_guru: 1,
		});

		Course.create({
			nama: "Matematika Dasar",
			description: "Lorem Ipsum Dolor Sit Amet.",
			kelas: "IX",
			backgroundImage: "mtk.jpg",
			id_guru: 2,
		});
	}
};

module.exports = init;
