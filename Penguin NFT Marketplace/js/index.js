
var web3 = new Web3(Web3.givenProvider);

var instance;
var user;
var contractAddress = "0x4B25339CF0DdbDE4f56B9ac6E302fb6e6660bd52";

$(document).ready(async function(){

    window.ethereum.enable()
    .then(async function(accounts){
     const instance = new web3.eth.Contract(abi, contractAddress, {from: accounts[0]})
     user = accounts[0];
    });
  
  });
