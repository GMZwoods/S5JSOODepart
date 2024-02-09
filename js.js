
const SacPeche = document.getElementById("nbPeches"); // NOMBRE
const SacPoire = document.getElementById("nbPoires");
const SacPomme = document.getElementById("nbPommes");

const PrixPeche = document.getElementById("prixPeches").innerText;//10$  Added .innerText to be able to get value!
const PrixPoire = document.getElementById("prixPoires").innerText; //12$
const PrixPomme = document.getElementById("prixPommes").innerText; //11$

const sousTotalPeches=document.getElementById("sousTotalPeches"); // Sous-Total
const sousTotalPoires=document.getElementById("sousTotalPoires"); // Sous-Total
const sousTotalPommes=document.getElementById("sousTotalPommes"); // Sous-Total
//Event listener pour changer la qt des sous totaux et additioner les prix
// dans le grand total

//POUR LES PECHES
SacPeche.addEventListener("change", AfficherPrix);
//SacPeche.innerHTML = sousTotalPeches.value

//POUR POIRES
SacPoire.addEventListener("change", AfficherPrix);
//SacPoire.innerHTML = sousTotalPoires.value

//POUR Pommes
SacPomme.addEventListener("change", AfficherPrix);
//.innerHTML = sousTotalPommes.value

// Afficher le montant lorsque la personne ajoute des quantitées au nombre de sac
function AfficherPrix()
{
    let adP = SacPeche.value * PrixPeche;
    sousTotalPeches.innerHTML = String(adP);
    let adP2 = SacPoire.value * PrixPoire;
    sousTotalPoires.innerHTML = String(adP2);
    let adP3 = SacPomme.value * PrixPomme;
    sousTotalPommes.innerHTML = String(adP3);
    let grandTotal = adP +adP2+ adP3;
    document.getElementById("total").innerHTML = String(grandTotal);
}



function ConfirmationCommande()
{
    document.getElementById("conditions").checked
    document.getElementById("Valider").removeAttribute("disabled")
}



// --------FORME "ONCHANGE" (HTML) JAVASCRIPT = document.getElementById("nbPeches").addEventListener("change", myFunction);
/*
function ajoutPanierFruit()
{


}

*/



















































