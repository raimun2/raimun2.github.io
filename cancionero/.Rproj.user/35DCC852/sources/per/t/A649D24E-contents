library(readxl)
library(tidyverse)
library(rvest)
library(pdftools)

seleccion <- read.csv("data/seleccion.csv", sep =";", header =TRUE)
seleccion$Artista <- iconv(seleccion$Artista,  to = "ASCII//TRANSLIT")
seleccion$Artista <- tolower(seleccion$Artista)
seleccion$Artista <- gsub("[[:punct:]]", "", seleccion$Artista)

seleccion$Cancion <- iconv(seleccion$Cancion, to = "ASCII//TRANSLIT")
seleccion$Cancion <- tolower(seleccion$Cancion)
seleccion$Cancion <- gsub("[[:punct:]]", "", seleccion$Cancion)

seleccion$check <- 0
seleccion$i <- 1:nrow(seleccion)

##################

# faltantes
faltantes <- seleccion %>% filter(check == 0)

faltantes$Artista2 <- gsub("la |los ","",faltantes$Artista)
faltantes$Cancion2 <- gsub("ñ","ni",faltantes$Cancion)
faltantes$Artista2 <- gsub("Chancho en piedra","Chancho de piedra",faltantes$Artista2)
faltantes$Artista2 <- gsub("Enanitos Verdes","Enanitos",faltantes$Artista2)


## la cuerda (canciones en español)
for(i in 1:nrow(faltantes)){
  url <- gsub(" ","_",paste0("https://acordes.lacuerda.net/",faltantes$Artista2[i],"/",faltantes$Cancion2[i],".shtml"))  
  webpage <- NULL
  tryCatch(webpage <- read_html(url), error = function(e) NULL)
  if(!is.null(webpage)){
    text <- html_text(html_nodes(webpage,'pre'))

    cat(text,file = gsub(" ", "_", paste0("canciones/", faltantes$i[i], " ",
                                          faltantes$Artista[i], "-",
                                          faltantes$Cancion[i], ".txt")), sep="\n")

    seleccion$check[faltantes$i[i]] <- 1
    
    
  }
}


## en ingles 
faltantes <- seleccion %>% filter(check == 0)

faltantes$Artista2 <- gsub("the ","",faltantes$Artista)


for(i in 1:nrow(faltantes)){
    url <- gsub(" ","+",paste0("https://www.guitaretab.com/fetch/?type=tab&query=",faltantes$Artista2[i],"+",faltantes$Cancion[i]))  

    webpage <- NULL
    tryCatch(webpage <- read_html(url), error = function(e) NULL)
    if(!is.null(webpage)){
      busqueda <- html_nodes(webpage,'.gt-link--primary') 
      
      titulos <- busqueda %>% html_attr('title') 
      
      indice = 1
      if(length(titulos)>1)      {
        indice <- grep("((c|C)hord)|((a|A)coust)", titulos)[1]
        if(is.na(indice)){
          indice = 1
        }
      }
      
      link <- (busqueda %>% html_attr('href'))[indice]
      if(!is.na(link)){
        url2 <- paste0("https://www.guitaretab.com",link)
        
        cancion <- read_html(url2)
        
        text <- html_text(html_nodes(cancion,'.js-tab-row'))
        
        cat(text,file = gsub(" ", "_", paste0("canciones/", faltantes$i[i], " ",
                                              faltantes$Artista[i], "-",
                                              faltantes$Cancion[i], ".txt")), sep="\n")
        
        seleccion$check[faltantes$i[i]] <- 1
      }
   }
}




######  cancionero de james ######
indice <- read_excel("data/indice.xlsx")
indice <- indice[order(indice$Pagina),]
indice$Pagina <- indice$Pagina + 1
indice$paginafin <- c(indice$Pagina[-1]-1,max(indice$Pagina)+1)

### aplanar caracteres
indice$Grupo <- iconv(indice$Grupo, from ="UTF-8", to = "ASCII//TRANSLIT")
indice$Cancion <- iconv(indice$Cancion, from ="UTF-8", to = "ASCII//TRANSLIT")
indice$Grupo <- tolower(indice$Grupo)
indice$Cancion <- tolower(indice$Cancion)

indice$Grupo <- gsub("[[:punct:]]", "", indice$Grupo)
indice$Cancion <- gsub("[[:punct:]]", "", indice$Cancion)

faltantes <- seleccion %>% filter(check == 0)



## cruzar nombre cancion primero
for(i in 1:nrow(faltantes)){
  if(faltantes$Cancion[i] %in% indice$Cancion){
    
    subindice <- indice[which(faltantes$Cancion[i] %in% indice$Cancion),]
    
    faltantes$check[i] <- 1
    
    
    text <- pdf_text("data/cancionero.pdf")[subindice$Pagina[1]:subindice$paginafin[1]]
    
    cat(text,file = gsub(" ", "_", paste0("canciones/", faltantes$i[i], " ",
                                          faltantes$Artista[i], "-",
                                          faltantes$Cancion[i], ".txt")), sep="\n")
  }
}



