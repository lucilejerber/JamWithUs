package jamwithus

class ImageController {
	static scaffold = Image

	def search(String q) { 
	    if (q) {
	        def query = Image.where { 
	            role ==~ "%${q}%"
	        }
	        respond query.list() 
	    }
	    else {
	        respond([]) 
	    }
	}
}
