function lireheure() {
    setTimeout("lireheure()", 1000);
    let d = new Date();
    let heure = d.getHours();
    let minute = d.getMinutes();
    let seconde = d.getSeconds();
    if (heure < 10) {
        heure = "0" + heure;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (seconde < 10) {
        seconde = "0" + seconde;
    }

    let seperateur;
    if (seconde % 2 == 0) {
        seperateur = ":";
    }
    else {
        seperateur = " ";
    }
    document.formulaire.HORLOGE.value = (heure + " " + seperateur + " " + minute + " " + seperateur + " " + seconde);
}
function liredate() {
    setTimeout("liredate()", 1000);
    let da = new Date();
    let annee = da.getFullYear();
    let jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    let mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    
    document.formulaire.DATEAUJ.value = (jours[da.getDay()] + " " + da.getDate() + " " + mois[da.getMonth()] + " " + annee);
}