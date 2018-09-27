package main

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func main() {
	// Set the router as the default one shipped with Gin
	router := gin.Default()

	// Serve frontend static files
	router.Use(static.Serve("/", static.LocalFile("./html", true)))

	// Match all url to index.html for SPA
	router.NoRoute(func(c *gin.Context) {
		c.File("./html/index.html")
	})

	// Start and run the server
	router.Run(":80")
}
