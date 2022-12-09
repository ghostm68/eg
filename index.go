package main

import (
	"fmt"
	"html/template"
	"net/http"
)

const tpl = `
<!DOCTYPE html>
<html>
<head>
	<title>Go Website with Dropdown Menu</title>
	<style>
		body {
			font-family: sans-serif;
		}
		nav {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1em;
			background-color: #333;
			color: #fff;
		}
		nav a {
			color: #fff;
			text-decoration: none;
			padding: 0.5em;
		}
		nav a:hover {
			background-color: #444;
		}
		nav select {
			border: none;
			background-color: #333;
			color: #fff;
			padding: 0.5em;
		}
		main {
			padding: 1em;
		}
	</style>
</head>
<body>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<select>
			{{range .MenuItems}}
				<option value="{{.URL}}">{{.Label}}</option>
			{{end}}
		</select>
	</nav>
	<main>
		{{.Body}}
	</main>
</body>
</html>
`

// Page represents a website page with a title, body, and menu items.
type Page struct {
	Title      string
	Body       string
	MenuItems  []MenuItem
}

// MenuItem represents a single menu item with a label and URL.
type MenuItem struct {
	Label string
	URL   string
}

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		p := Page{
			Title: "Go Website with Dropdown Menu",
			Body:  "<h1>Home</h1><p>Welcome to the home page of our Go website!</p>",
			MenuItems: []MenuItem{
				{Label: "Home", URL: "/"},
				{Label: "About", URL: "/about"},
				{Label: "Contact", URL: "/contact"},
			},
		}
		render(w, "index", p)
	})

	http.HandleFunc("/about", func(w http.ResponseWriter, r *http.Request) {
		p := Page{
			Title: "About",
			Body:  "<h1>About</h1><p>This is an example website written in Go!</p>",
			MenuItems: []
