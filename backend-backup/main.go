package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("./static/index.html"))

	fmt.Println("Server jalan di http://localhost:8080")
	// Jalankan server di port 8080
	http.ListenAndServe(":8080", fs)
}