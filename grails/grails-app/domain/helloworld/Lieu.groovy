package helloworld

class Lieu {
  String nom;
  int capacite;
  String pays; 
  String ville; 
  String adresse; 
  int codePostale  
  Boolean disponibilite;

  static constraints = {
        nom blank: false
        capacité size: 5..15, blank: false
        pays blank: false
        ville blank: false
        adresse blank: false
        codePostale blank: false
        disponibilité blank: false
    }
}

