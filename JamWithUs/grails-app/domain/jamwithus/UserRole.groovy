package jamwithus

class UserRole {
    User user
    String role

    static constraints = {    	 
        role inList: ["admin", "askers", "watchers", "participants"]
    }
}
