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
        jams: Jam,
        genres: Genre, 
        instruments: Instrument, 
    ]


    static constraints = {    	 
    	username nullable: false
    	mail nullable: false, email: true, unique: true
        password nullable: false

    	birthday nullable: true

    	phoneNumber nullable: true
    	country nullable: true
    	city nullable: true
    	description nullable: true
    	instruments nullable: true
    	genres nullable: true
    	jams nullable: true
    }
}
