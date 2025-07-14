library(sp)
p = Polygon(coords = matrix(c(1,2,2,1,1,1,1,2,2,1), ncol = 2))
p1= Polygons(list(p), ID=1)
p2=SpatialPolygons(list(p1))
p3=SpatialPolygonsDataFrame(p2, data = as.data.frame("1"))
library(rgdal)
library(gdalUtils)
writeOGR(p3, dsn = "square1", layer = "entities", driver="GMT")  #layer MUST be entities and final GMT is then called entities

ogr2ogr("entities.gmt", "square.dxf", "entities", "DXF", nlt =
          "MULTILINESTRING")
library(RPostgreSQL)
