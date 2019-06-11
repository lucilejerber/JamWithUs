package jamwithus

class BootStrap {

    def init = { servletContext ->
        new Image(url: '../../assets/images/genre/jazz.png',  role: "genre").save()
        new Image(url: '../../assets/images/genre/rock.png',  role: "genre").save()
        new Image(url: '../../assets/images/instruments/drum-set.png',  role: "instrument").save()
        new Image(url: '../../assets/images/instruments/flute.png',  role: "instrument").save()
        new Image(url: '../../assets/images/instruments/guitar.png',  role: "instrument").save()
        
        new Genre(name: 'Jazz',  logo: 1).save()
        new Genre(name: 'Rock',  logo: 2).save()
        new Instrument(name: 'Drum Set',  logo: 3).save()
        new Instrument(name: 'Flute',  logo: 4).save()
        new Instrument(name: 'Guitar',  logo: 5).save()
		
		new User(username: 'Tim', mail:'mail.mail@truc.com', password: 'motdepasse').save()
       
    }
    def destroy = {
    }
}
