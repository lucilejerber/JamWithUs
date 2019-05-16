package helloworld

class Image {
    String url;
    String role;  // avatar, instrument, genre

   static constraints = {
        url blank: false, size: 1..512
    }
}

