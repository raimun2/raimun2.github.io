
## cargo coordenadas de los cerros de andes azul
andes_azul <- read.table("andes_azul.csv", sep = ";", dec = ",")
## cambio los nombres de las columnas
colnames(andes_azul) <- c("Cumbre", "elev", "lat", "long")

## invoco libreria sp
library(sp)
## transformo coordenadas en puntos espaciales
aar_sp <- SpatialPointsDataFrame(data=andes_azul[,4:3],  coords=andes_azul[,4:3], proj4string=CRS("+proj=longlat +datum=WGS84"))

## invoco libreria plotKML
library(plotKML)

ruta_ejemplo <- readGPX("2020-09-09_ruta_interpolada.gpx")

## ruta ejemplo es una lista anidada
ruta_tracks <- ruta_ejemplo$tracks[[1]][[1]]

## ruta a puntos espaciales
rutabase_sp <- SpatialPointsDataFrame(data=ruta_tracks[,1:2],  coords=ruta_tracks[,1:2], proj4string=CRS("+proj=longlat +datum=WGS84"))


## invoco libreria leaflet
library(leaflet)

## creo mapa
leaflet() %>%
  addTiles() %>%  # Add default OpenStreetMap map tiles
  addProviderTiles(providers$OpenTopoMap) %>% ## uso mapa topografico
  addCircleMarkers(data = aar_sp, radius = 5, col = "blue") %>% #grafico cumbres andes azul
  addCircleMarkers(data = rutabase_sp, radius = 1, col = "red") #grafico ruta ejemplo
  
