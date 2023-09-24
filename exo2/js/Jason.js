"use strict"


let affichageMort = []
let prenom = ["bastien","Thomas","nicolas","emma","clement"]
// Définition de la classe Personnage pour créer des personnages et cretion d'un boucle
for(let i=0 ; i<5 ; i++){
class Personnage {
    // Le constructeur initialise les attributs du personnage lors de sa création
    constructor(PV ,nom, mourir,probabiliteDegat,Degat,probabiliteDegatSuicide,DegatSuicide) {
      this.PV = PV //point de vie  
      this.nom = nom; // Le nom du personnage
      this.mourir = mourir; // Probabilité de mourir
      this.probabiliteDegat = probabiliteDegat; // Probabilité d'attaquer et faire des degats
      this.probabiliteDegatSuicide = probabiliteDegatSuicide; // Probabilité de faire des degats mais de mourir
      this.Degat = Degat; // valeur d'attaque
      this.DegatSuicide = DegatSuicide; // valeur d'attaque si le personnage meurt
      
    }
    attaquer(cible) {
        // Vérifie si l'attaque réussit en comparant à la probabilité de mourir des survivant
        if (Math.random() < this.mourir) {
          cible.PV = 0
          // Affiche un message d'attaque réussie
          console.log(`${this.nom} attaque` + prenom[rand] +` et le tue `);
          // Appelle la méthode contreAttaqueSuicide de la cible pour lui infliger des dégâts
          cible.contreAttaqueSuicide(this.DegatSuicide);
        } else {
          // Affiche un message d'échec d'attaque
          console.log(`${this.nom} rate son attaque contre `+prenom[rand]);
          //Appelle la méthode contreAttaque de la cible pour infliger des dégâts à Jason
          cible.contreAttaque(this.Degat);
        }
      }
      // Méthode pour encaisser des dégâts infligés par un attaquant
    contreAttaqueSuicide(DegatSuicide) {
        // Vérifie si le personnage réussit à contre-attaquer en comparant à la probabilité de contre-attaque
        if (Math.random() < this.probabiliteDegatSuicide) {
          // Affiche un message de contre-attaque réussie
          console.log(prenom[rand]+` contre-attaque mais meurt`);
          // Réduit les points de vie du personnage Jason
          Jason.PV -= DegatSuicide;
          console.log("Jason a " + Jason.PV + " PV");
        } else {
          // Affiche un message d'encaissement de dégâts
          console.log(prenom[rand]+` meurt.`);
        }
    
        // Vérifie si le personnage est vaincu (points de vie <= 0)
        if (this.PV <= 0) {
          // Affiche un message indiquant que le personnage est vaincu
          console.log(prenom[rand]+` est vaincu.`);
        }
      }
    contreAttaque(Degat) {
        // Vérifie si le personnage réussit à contre-attaquer en comparant à la probabilité de contre-attaque
        if (Math.random() < this.probabiliteDegat) {
          // Affiche un message de contre-attaque réussie
          console.log(prenom[rand]+` contre-attaque `);
          // Réduit les points de vie du personnage Jason
          Jason.PV -= Degat;
          
          console.log(prenom[rand]+` inflige ${Degat} points de dégâts.`);
        }
    
        // Vérifie si le personnage est vaincu (points de vie <= 0)
        if (this.PV <= 0) {
          // Affiche un message indiquant que le personnage est vaincu
          console.log(prenom[rand]+` est vaincu.`);
        }
      }

    }
// creation des personnages
    let Jason = new Personnage(100,"Jason", 0.5,1,10,0.5,15);
    let chinois = new Personnage(100,"chinois", 0.4, 1 ,10,0.5,15);
    let sportif = new Personnage(100,"sportif", 0.3, 1 ,10,0.7,15);
    let policier = new Personnage(100,"policier", 0.5, 1 ,10,0.7,15);
    let serveur = new Personnage(100,"serveur", 0.4, 1 ,10,0.7,15);
    let cowboy = new Personnage(100,"cowboy", 0.4, 1 ,10,0.6,15);
    
    
    let classes=[chinois,sportif,policier,serveur,cowboy]
    

    let tour = 1;
    
    
    let rand = Math.floor(Math.random()*prenom.length);
    let rValue = prenom[rand];
    while (Jason.PV > 0 ) {
      console.log(`Tour ${tour}:`);
    
      //Jason attaque un perso au hasard
      Jason.attaquer(classes[i]);
    
      // Vérifie si Jason a été vaincu
      if (Jason.PV <= 0) {
        console.log(prenom[rand] +` a tué Jason !`);
        break; // Sort de la boucle si Jason est vaincu
      }
       
       // Vérifie si les perso a été vaincu
       if (classes[i].PV <= 0) {
         console.log(`${Jason.nom} a tué ` + prenom[rand] + " !");
         let deces =  prenom.splice(rand,1)
         affichageMort.push(deces)
         break; // Sort de la boucle si les perso est vaincu
       }
      console.log(`${Jason.nom} : ${Jason.PV} points de vie`);
      tour++;
    }
    
  
  
  // Affiche un message indiquant le résultat du combat
  if (Jason.PV <= 0) {
    console.log("Jason a été vaincu .Les survivants gagne !");
  } else  if ( chinois.PV , policier.PV , sportif.PV,serveur.PV,cowboy.PV <= 0)  {
    console.log("Jason a tué tout le monde quel dommage !");
  }
}
//affiche tous les morts 
console.log("RIP à " + affichageMort);

// malheureusement je n'ai pas reussi a completer mon code car il me manque 
// un element qui me permetrrai de garder les PV de Jason sans qu'il se reintialise dans la boucle  à chaque fois