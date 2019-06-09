package jamwithus

class User {
    String surname
    String name
    String lastname
    Date birthday 

    String mail
    String password
    String phoneNumber

    String country
    String city

    String description

    static hasMany = [genres: Genre, instruments: Instrument, jams: Jam]

    
    
    static constraints = {
    	 
    	name nullable: true
    	lastname nullable: true
    	mail nullable: false
		password nullable: true
    	
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
