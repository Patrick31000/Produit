var Produit = function(nom, prix) {
    this.nom = nom;
    this.prix = prix;
}

var Panier = function() {
    this.totalHT = 0;
    this.ajoute = function(Epicerie) {
        this.totalHT = Math.ceil(this.totalHT + Epicerie.prix);
        this.totalTTC = Math.ceil(this.totalHT * 1.20);
    };

    this.retire = function(Epicerie) {
        this.totalHT = Math.ceil(this.totalHT - Epicerie.prix);
        this.totalTTC = Math.ceil(this.totalHT * 1.20);

    };
};






var baguette = new Produit('Baguette', 0.85); // prix HT
var croissant = new Produit('Croissant', 0.80);

var panier = new Panier();

panier.ajoute(baguette);
panier.ajoute(croissant);



console.log(panier.totalHT);
console.log(panier.totalTTC);
