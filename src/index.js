import { initLoading, openLoading, closeLoading } from './tools/displayLoading'
import './assets/css/style.css'
import loader from './assets/img/loading.gif'
import icon from './assets/img/logo.png'
import AppRoutes from './routes'

const loading = document.querySelector('#loading')
const linkIcon = document.querySelector('link[rel="icon"]')
linkIcon.setAttribute('href', icon)

AppRoutes()

initLoading(loader)
