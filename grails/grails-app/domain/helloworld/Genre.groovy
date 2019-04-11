package helloworld

class Genre {
  String nom;
  Image logo;

   static constraints = {
        nom blank: false
    }
    
    static scaffold = Book  // Or any other domain class such as "Author", "Publisher"
}

