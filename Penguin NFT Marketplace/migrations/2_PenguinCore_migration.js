const PenguinCore = artifacts.require("./PenguinCore");

module.exports = function(deployer) {
  deployer.deploy(PenguinCore);
};
