/* fonction pour integrer l'API*/
function fonctionRequeteApi(url,elementID)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
            document.getElementById(elementID).innerHTML = jsonPretty;
        }
    };
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

/* fonction quon appel pour charger les API*/
function homePageLoading() {
  
    fonctionRequeteApi("https://api.blockcypher.com/v1/btc/main", "info");
    fonctionRequeteApi("https://bitcoin.mubiz.com/peerinfo","peerinfo");
    fonctionRequeteApi("https://bitcoin.mubiz.com/mininginfo", "mininginfo");
    fonctionRequeteApi("https://bitcoin.mubiz.com/blockchaininfo", "blockchaininfo");   
}

/*Fonction pour recuperer et afficher les valeurs saisie par le formulaire*/

function SendData()
{
    //var adr=document.getElementById("url").value;
    var api=document.getElementById("url").value;;
    var adresse = "https://bitcoin.mubiz.com/peerinfo"
    var url= adresse.concat(api);
    fonctionRequeteApi(url,"resultat");
}

