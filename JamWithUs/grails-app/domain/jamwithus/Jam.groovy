package jamwithus

class Jam {
    String name
    Date date
    
    String location
    String latitude
    String longitude
    
    String description

    int numberParticipants
    int maxParticipants

    static hasMany = [
        participants: User, 
        askers: User, 
        watchers: User, 
        instruments: Instrument, 
        genres: Genre
    ]

    static constraints = {
        description nullable: true
        numberParticipants nullable: true
        instruments nullable: true
        participants nullable: true
        askers nullable: true
        watchers nullable: true
        genres nullable: true
    }
}
