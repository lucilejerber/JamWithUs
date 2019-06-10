package jamwithus

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
<<<<<<< HEAD
        get "/$controller(.$format)?"(action:"search")
=======
>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

<<<<<<< HEAD
        
=======

>>>>>>> fb82320bb805a708abd0cb98893cdf7cd3ee41fb
        "/"(view:"/index")
        "500"(view:'/error')
        "404"(view:'/notFound')
    }
}
