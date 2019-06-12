package jamwithus

class Jam {
    String name
    Date date
    

    String locationName
    String locationAdress
    String latitude
    String longitude

    String description

    int numberParticipants
    int maxParticipants

    static hasMany = [
        gens: JamRole,
        instruments: Instrument, 
        genres: Genre
    ]

    static constraints = {
        description nullable: true
        numberParticipants nullable: true
        instruments nullable: true
        genres nullable: true
    }
}
