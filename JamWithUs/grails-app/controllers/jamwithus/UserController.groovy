package jamwithus

class UserController {
<<<<<<< HEAD

	static scaffold = User

	def search(String q) { 
	    if (q) {
	        def query = User.where { 
	            mail ==~ "%${q}%"
	        }
	        respond query.list() 
	    }
	    else {
	        respond([]) 
	    }
	}
	
=======
	static scaffold = User
>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
}
