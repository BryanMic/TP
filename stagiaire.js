class Stagiaire
{
    nom;
    prenom;

    salutation()
    {
        return `je m'appelle ${this.prenom} ${this.nom}`;
    }

    constructor(prenom, nom)
    {
        this.prenom = prenom;
        console.log(nom);
        this.nom = nom.toUpperCase();

    }


}
