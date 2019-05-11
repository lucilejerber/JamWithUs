package helloworld

class User {

    String  surnom
    String  nom
    String  prenom
    Date    anniversaire 

    String mail
    String motDePasse
    String numeroDeTelephone

    String pays
    String ville

    String description
    static hasManyInstrument = [instruments: Instrument]
    static hasManyGenre = [genres: Genre]
    static hasManyJam = [jams:  Jam]

    Image avatar

    static constraints = {
		surnom size: 3..15, blank: false, unique: true
        mail unique: true, blank: false, email: true
        motDePasse size: 5..15, blank: false
        anniversaire blank: true
    }
}

