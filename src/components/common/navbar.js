import logo from '../../assets/img/logo.png'
import githubLogo from '../../assets/img/github.png'

export default (element) => {

    const render = () => {
        const navbar = document.createElement('nav')
        navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light')
        navbar.innerHTML = `
            <a class="navbar-brand" href="/"><img style="width:30px; height:30px;" src="${logo}" alt="cocktail aux fruits">MyCoktails</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/random">Random Cocktail</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search"> Search a cocktail</a>
                    </li>
                </ul>
                <a href="https://github.com/tutur17449" target="_blank">
                    <img style="width:22px; height:22px;" src="${githubLogo}" alt="logo github"> 
                </a>
            </div>            
        `

        element.appendChild(navbar)
    }

    return render()

}
