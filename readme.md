# STARTER for PWA using Nodejs, Express and webpack

## Init

Create .env file on the 'server' folder with variable 
* PORT = -port-
* MONGO_URL = '-mongo url-'
* JWT_SECRET = -key-
* COOKIE_SECRET = -key-
* COOKIE_NAME = -name-

Create .env file on the 'client' folder with variable 
* API_KEY = -key-

## Install

At the root of the project, install the dependencies with 
> npm run build

## Start

At the root of the project, run app with 
> npm run app






fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?a=Alcoholic", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
		"x-rapidapi-key": "d96a4bfdc3msh359d6eed9b9973ep11b8edjsnab24a25b832b"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});