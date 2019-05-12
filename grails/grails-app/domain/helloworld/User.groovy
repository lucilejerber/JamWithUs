package helloworld

class User {

    String pseudo
    String mail
    String password

    String firstName
    String lastName
    String phoneNumber
    Date birthday 

    String city
    String country

    Image avatar
    String description

    static hasMany = [instruments: Instrument, genres: Genre, jams: Jam]
    
    static constraints = {
        pseudo size: 3..15, blank: false, unique: true
        mail unique: true, blank: false, email: true
        password size: 5..15, blank: false
        firstName nullable: true
        lastName nullable: true
        phoneNumber nullable: true
        birthday nullable: true
        city nullable: true
        country nullable: true
        avatar nullable: true
        description nullable: true
        instruments nullable: true
        genres nullable: true
        jams nullable: true
    }
}

