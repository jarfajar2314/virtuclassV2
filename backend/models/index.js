const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
	host: config.HOST,
	dialect: config.dialect,
	operatorsAliases: false,

	pool: {
		max: config.pool.max,
		min: config.pool.min,
		acquire: config.pool.acquire,
		idle: config.pool.idle,
	},
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.siswa = require("../models/siswa.model.js")(sequelize, Sequelize);
db.guru = require("../models/guru.model.js")(sequelize, Sequelize);
db.admin = require("../models/admin.model.js")(sequelize, Sequelize);
db.course = require("../models/course.model.js")(sequelize, Sequelize);
db.modul = require("../models/modul.model.js")(sequelize, Sequelize);
db.submodul = require("../models/subModul.model.js")(sequelize, Sequelize);
db.soal = require("../models/soal.model.js")(sequelize, Sequelize);
db.assignment = require("../models/assignment.model.js")(sequelize, Sequelize);
db.nilai = require("../models/nilai.model.js")(sequelize, Sequelize);

db.guru.hasMany(db.course, {
	foreignKey: "id_guru",
});

db.modul.hasMany(db.submodul, {
	foreignKey: "id_modul",
});

db.siswa.hasMany(db.assignment, {
	foreignKey: "id_siswa",
});

db.siswa.hasMany(db.nilai, {
	foreignKey: "id_siswa",
});

db.modul.hasMany(db.soal, {
	foreignKey: "idModul",
});

module.exports = db;
