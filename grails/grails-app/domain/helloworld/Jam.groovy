package helloworld

class Jam {
    String nom
    Date date
    
    Lieu lieu
    
    static hasInstruments = [instruments: Instrument]
    static hasGenre = [genres: Genre]
    String description

    int nombreDeParticipants
    int nombreMaxParticipants
    Boolean complet
    static hasParticipants = [participants: User]
    static hasDemandeurs = [demandeurs: User]
    static hasSpectateurs = [spectateurs: User]

    User administrateur

    static constraints = {
        nom blank: false
        date blank: false
        lieu blank: false
        administrateur blank: false
        nombreMaxParticipants blank: false
    }
}
