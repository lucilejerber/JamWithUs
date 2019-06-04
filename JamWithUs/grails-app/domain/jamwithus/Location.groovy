package jamwithus

class Location {
	String name
	String street_number
	String route
	String locality
	String country 
	String administrative_area_level_2 
	String administrative_area_level_1 
	String postal_code
	int capacity  
	Boolean availability

    static constraints = {
        capacity max: 15, blank: false
    }
}
