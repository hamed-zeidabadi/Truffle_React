const Migration = artifacts.require('Migrations.sol');
module.exports = function (deployer) {
    deployer.deploy(Migration)
}