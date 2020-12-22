# retoLoFiMongo

_Aplicación back de una API que sirve un listado de videos musicales LO-FI de youtube_

### Back-end

* Nodejs
* Express
* MongoDB

`Heroku` https://retolofi.herokuapp.com

Endpoints

> /api/videos

    "get": {

        "_id": "id object",
        
        "titulo": "titulo del video",
        
        "autor": "Autor del video",
        
        "canal": "canal de youtube del autor",
        
        "usuario": "usuario de youtube",
        
        "video": "ruta del video en youtube",
        
        "imagen": "imagen del video",
        
        "duracion": "duracion del video",
        
        "rango": "id del video",
        }
        
        
 > /api/videos/aleatorio
 
  "get": Devuelve los datos de un video aleatorio.
  
  > /api/videos/detalles/:detalleId
 
  "get": Devuelve los datos de un video con un id especifico.
  
  > /api/videos/biusquedaId
 
  "get": Devuelve los datos de un video con un texto dado.
  
  
  ## Autores ✒️

_Proyecto personal realizado para aprender las capacidades de una base de datos no relaccional con MongoDB_

* **Óscar Ibeas** - *Autor* - [oibeas](https://github.com/oibeas)

## Contribuyendo 🖇️

* Informacion de los videos sacada de youtube.com
* #RetoLofi Playlist Oficial por [Jaime Altozano](https://www.youtube.com/watch?v=cDIYpIbTbW8&list=PL0ONFXpPDe_mtm3ciwL-v7EE-7yLHDlP8)


## Expresiones de Gratitud 🎁

Muchas gracias a Jaime Altozano y todos los participantes del #RetoLofi.


  
