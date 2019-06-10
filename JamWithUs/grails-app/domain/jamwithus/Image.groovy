package jamwithus

class Image {
	
    String url
    String role  // avatar, instrument, genre

    static constraints = {
    	role inList: ["avatar", "instrument", "genre"]
    }
}
