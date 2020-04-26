export default (element) => {

    const render = () => {
        element.innerHTML += `
        <section id="search" class="text-center">
            <div class="container-fluid">
                <h1> Error 404 </h1>
            </div>
        </section>
        `
    }

    return render ();

}
