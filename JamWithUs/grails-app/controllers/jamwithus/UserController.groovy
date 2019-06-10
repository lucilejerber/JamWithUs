package jamwithus

class UserController {

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
	
}
