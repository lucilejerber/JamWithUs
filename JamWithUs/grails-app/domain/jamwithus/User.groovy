package jamwithus

class User {
    String name
    String lastname
    Date birthday 

    String mail
    String password
    String phoneNumber

    String country
    String city

    String description

    // static hasMany = [instruments: Instrument, genres: Genre, jams:  Jam]

    static constraints = {
    	 
    	name nullable: false
    	lastname nullable: false
    	mail nullable: false

    	birthday nullable: true
    	password nullable: true
    	phoneNumber nullable: true
    	country nullable: true
    	city nullable: true
    	description nullable: true
    	// instruments nullable: true
    	// genres nullable: true
    	// jams nullable: true

    }
}
