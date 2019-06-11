package jamwithus

class BootStrap {

    def init = { servletContext ->
        new Image(url: 'https://image.flaticon.com/icons/svg/1882/1882657.svg',  role: "genre").save()
        new Image(url: 'https://image.flaticon.com/icons/svg/179/179538.svg',  role: "genre").save()
        new Image(url: 'https://image.flaticon.com/icons/svg/199/199386.svg',  role: "instrument").save()
        new Image(url: 'https://image.flaticon.com/icons/svg/848/848115.svg',  role: "instrument").save()
        new Image(url: 'https://image.flaticon.com/icons/svg/1813/1813048.svg',  role: "instrument").save()
        
        new Genre(name: 'Jazz',  logo: 1).save()
        new Genre(name: 'Rock',  logo: 2).save()

        new Instrument(name: 'Drum Set',  logo: 3).save()
        new Instrument(name: 'Flute',  logo: 4).save()

        new Instrument(name: 'Guitare',  logo: 5).save()
		new User(username: 'Tim', mail:'mail.mail@truc.com', password: 'motdepasse').save()
        new Jam(name: 'Première Jam',  date: '2019-06-12T14:04:00.000Z', locationName: "Home", locationAdress: "15 rue Berthollet 75005 Paris", latitude: "48.839052", longitude: "2.345883", maxParticipants: 9).save()
        new User(username: 'admin',  password: 'test',  mail: 'jamwithusISEP@gmail.com', jams: [1]).save()
 

    }
    def destroy = {
    }
}
