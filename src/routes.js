import Router from 'vanilla-router'
import main from './components/main'
import navbar from './components/common/navbar'
import footer from './components/common/footer'
import random from './components/random'
import search from './components/search'
import error404 from './components/error404'
const root = document.querySelector('#root')
const features = document.querySelector('footer')

export default () => {
    const router = new Router({
        mode: 'history',
        page404: function (path) {
            error404(root)
        }
    });

    router.add('', function () {
        navbar(root)
        main(root)
        return footer(features)
    });

    router.add('random', function () {
        navbar(root)
        random(root)
        return footer(features)
    });

    router.add('search', function () {
        navbar(root)
        search(root)
        return footer(features)
    });

    router.add('recipes/{id}', function (id) {
        navbar(root)
        try {
            getSingleCoktail(root, id)
        } catch(error){
            error404(root)
        }
        return footer(features)
    });

    window.router = router;
    router.navigateTo(window.location.pathname);
}