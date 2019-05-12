package helloworld

class Jam {
    String name;
    String description;
    
    Location location;
    User admin;
    Date date;
    
    int numberParticipants;
    int maxNumberParticipants;

    Boolean full;

    static hasMany = [participants: User, askers: User, spectators: User, instruments: Instrument, genres: Genre];

    static constraints = {
        name blank: false
        date blank: false
        location blank: false
        admin blank: false
        maxNumberParticipants blank: false
    }
}
