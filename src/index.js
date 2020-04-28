import main from './components/main'
import navbar from './components/common/navbar'
import footer from './components/common/footer'
import random from './components/random'
import search from './components/search'
import { initLoading, openLoading, closeLoading } from './tools/displayLoading'
import loader from './assets/img/loading.gif'
import icon from './assets/img/logo.png'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/style.css'

const root = document.querySelector('#root')
const loading = document.querySelector('#loading')
const features = document.querySelector('footer')
const linkIcon = document.querySelector('link[rel="icon"]')
const title = document.querySelector('title')
linkIcon.setAttribute('href', icon)

const router = () => {
    if(window.location.pathname === '/'){
        title.innerText = 'Home • MyCocktails • AHL App'
        navbar(root)
        main(root)
        return footer(features)
    } else if (window.location.pathname === '/random') {
        title.innerText = 'Random • MyCocktails • AHL App'
        navbar(root)
        random(root)
        return footer(features)
    } else if (window.location.pathname === '/search') {
        title.innerText = 'Search • MyCocktails • AHL App'
        navbar(root)
        search(root)
        return footer(features)
    } else {
        return window.location.replace("/");
    }
}

router()
initLoading(loader)
