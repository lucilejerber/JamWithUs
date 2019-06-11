package jamwithus

class JamRole {
    User user
    String role

    static constraints = {    	 
        role inList: ["admin", "askers", "watchers", "participants"]
    }
}
