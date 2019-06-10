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
<<<<<<< HEAD
        jams: Jam,
        genres: Genre, 
        instruments: Instrument, 
=======
        genres: Genre
        , instruments: Instrument
        , jams: Jam
>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
    ]

    static constraints = {    	 
    	username nullable: false
<<<<<<< HEAD
    	mail nullable: false, email: true, unique: true
=======
    	mail nullable: false, email: true
>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
        password nullable: false

    	birthday nullable: true
    	phoneNumber nullable: true
    	country nullable: true
    	city nullable: true
    	description nullable: true
    	instruments nullable: true
    	genres nullable: true
<<<<<<< HEAD
    	jams nullable: true
=======
    	jams nullable: true, blank: true
>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
    }
}
