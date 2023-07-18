

const auth = require('./auth.route');
const students = require('./students.route');
const paynets = require('./paynets.route');

module.exports = [auth,students,paynets];