let stagiaire1 = ['Martin','DUPONT']
let stagiaire2 = ['Vincent','MARTIN']
let stagiares = [stagiaire1,stagiaire2]
console.log(stagiares);


// let stagiaireA = new Stagiaire()
// stagiaireA.nom = "DUPONT"
// stagiaireA.prenom = "Martin"
// let stagiaireB = new Stagiaire()
// stagiaireB.nom = "MARTIN"
// stagiaireB.prenom = "Vincent"

let stagiaireA = new Stagiaire("DUPONT","Martin")

let stagiaireB = new Stagiaire("MARTIN","Vincent")


let stagiaires = [stagiaireA,stagiaireB]
console.log(stagiaires[1].prenom);


console.log(stagiaires[0].salutation());

let anotherStagiaire = new Stagiaire("Lucette","Anderson");
console.log(anotherStagiaire);

let essaie = new classe("DWM-14")
essaie.ajouterStagiaire(stagiaireA)
essaie.ajouterStagiaire(stagiaireB)
console.log(essaie);


var stage = ""

function creerStage(params) {
    
    
}

function afficherStage(params) {
    
}