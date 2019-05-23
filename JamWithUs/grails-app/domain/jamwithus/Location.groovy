package jamwithus

class Location {
	String name
	int capacity
	String country 
	String city
	String adress
	int postalCode  
	Boolean availability

    static constraints = {
        capacity max: 15, blank: false
    }
}
