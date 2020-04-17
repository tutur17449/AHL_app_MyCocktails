import main from './components/main'
import navbar from './components/common/navbar'
import footer from './components/common/footer'
import { initLoading, openLoading, closeLoading } from './tools/displayLoading'
import './assets/css/style.css'
import loader from './assets/img/loading.gif'
import icon from './assets/img/logo.png'
import random from './components/random'


const root = document.querySelector('#root')
const loading = document.querySelector('#loading')
const features = document.querySelector('footer')
const linkIcon = document.querySelector('link[rel="icon"]')
linkIcon.setAttribute('href', icon)

const router = () => {
    if(window.location.pathname === '/'){
        navbar(root)
        main(root)
        return footer(features)
    } else if (window.location.pathname === '/random') {
        navbar(root)
        random(root)
        return footer(features)
    } else if (window.location.pathname === '/search') {
        navbar(root)
        return footer(features)
    } else {
        return window.location.replace("/");

    }
}

router()
initLoading(loader)
