package jamwithus

class User {
    String username
    String mail
    String password

    Date birthday 
    String phoneNumber

    String country
    String city

    String description

    static hasMany = [
        genres: Genre
        , instruments: Instrument
        , jams: Jam
    ]

    static constraints = {    	 
    	username nullable: false
    	mail nullable: false, email: true
        password nullable: false

    	birthday nullable: true
    	phoneNumber nullable: true
    	country nullable: true
    	city nullable: true
    	description nullable: true
    	instruments nullable: true
    	genres nullable: true
    	jams nullable: true, blank: true
    }
}
