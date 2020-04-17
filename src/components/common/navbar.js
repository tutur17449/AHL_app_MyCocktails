import logo from '../../assets/img/logo.png'

export default (element) => {

    const render = () => {
        const navbar = document.createElement('nav')
        navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light')
        navbar.innerHTML = `
            <a class="navbar-brand" href="/"><img style="width:30px; height:30px;" src="${logo}" alt="coktail aux fruits">MyCoktails</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/random">Coktail aléatoire</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/search">Rechercher un coktail</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>            
        `

        element.appendChild(navbar)
    }

    return render()

}
