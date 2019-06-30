/*Laura*/

// Serveur Link
export const TOMCAT 			= 'http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/'
export const TOMCATSAVE 		= 'http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/user/save'
export const TOMCATUPDATE 		= 'http://projets-tomcat.isep.fr:8080/JamWithUs-0.1/user/update'

// ngrok Link	
export const LOCAL				= 'http://1f8a5b68.ngrok.io/'
export const USER				= 'user/'
export const JAM				= 'Jam/'
export const INSTRUMENT			= 'Instrument'
export const GENRE				= 'Genre'

export const DELETE				= 'delete/'
export const SAVE				= 'save/'
export const SHOW 				= 'show/'
export const UPDATE 			= 'update/'
export const SEARCH				= 'search/'

export const IDUSER				= '1'

export const SEARCHQ 			= 'search?q='

export const LOCALSAVE 		= LOCAL + USER + SAVE
export const LOCALUPDATE 	= LOCAL + USER + UPDATE + IDUSER
export const LOCALDELETE 	= LOCAL + USER + DELETE + IDUSER
export const LOCALSHOW 		= LOCAL + USER + SHOW + IDUSER
export const LOCALSEARCH	= LOCAL + USER + SEARCH + IDUSER

export const LOCALJAMSAVE 		= LOCAL + JAM + SAVE
export const LOCALINSTRUMENT	= LOCAL + INSTRUMENT
export const LOCALGENRE 		= LOCAL + GENRE

export const TOMCATSHOW 		= TOMCAT + USER + SHOW + IDUSER
export const TOMCATUSERSEARCH	= TOMCAT + USER + SEARCHQ