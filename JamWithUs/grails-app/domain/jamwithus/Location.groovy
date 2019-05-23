package jamwithus

class Location {
	String name
	String address
	String locality
	String country 
	String administrative_area_level_2 
	String administrative_area_level_1 
	int postalCode
	int capacity  
	Boolean availability

    static constraints = {
        capacity max: 15, blank: false
    }
}
