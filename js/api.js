/* Info */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("info").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "https://api.blockcypher.com/v1/btc/main", true);
xmlhttp.send();

/* Blockchaininfo */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("blockchaininfo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/blockchaininfo", true);
xmlhttp.send();

/* mininginfo */

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("mininginfo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/mininginfo", true);
xmlhttp.send();

/* peerinfo */
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("peerinfo").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", "http://bitcoin.mubiz.com/peerinfo", true);
xmlhttp.send();


/*curency*/

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById("currency").innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", " http(s)://api.coindesk.com/v1/bpi/currentprice.json", true);
xmlhttp.send();
