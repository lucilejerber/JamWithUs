package helloworld

class Location {
  String name;
  int capacity;
  String country; 
  String city;
  String adress; 
  int postalCode; 
  Boolean available;

  static constraints = {
        name blank: false
        capacity max: 15, blank: false
        country blank: false
        city blank: false
        adress blank: false
        postalCode blank: false
        available blank: false
    }
}

