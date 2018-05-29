const userModel = require('../model/user.js');
const userTemplate = require('../view/user.js');

let userHtml = userTemplate.build(userModel);

module.exports = userHtml;