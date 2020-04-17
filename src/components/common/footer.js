export default (element) => {

    const render = () => {
        const footerContainer = document.createElement('div')
        footerContainer.classList.add('container')
        footerContainer.innerHTML = `
            <p class="float-right">
                <a href="#">Back to top</a>
            </p>
            <p>Copyright &copy; 2020, AHL App</p>        
        `
        element.appendChild(footerContainer)
    }

    return render()

}