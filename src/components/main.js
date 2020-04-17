
export default (element) => {
    
    const render = () => {
        element.innerHTML += `
        <section class="text-center">
            <div class="container-fluid">
                <h1>My App</h1>
                <p class="lead text-muted">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, omnis quam autem aperiam deserunt
                    in voluptates veniam minima eius molestias quidem, ad aliquid magnam tenetur beatae ea nihil debitis
                    praesentium?
                </p>
                <p>
                    <a href="#" class="btn btn-primary my-2">Register</a>
                    <a href="#" class="btn btn-secondary my-2">Login</a>
                </p>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <h2> List of users </h2>
                <div id="articlesContainer" class="row">

                </div>
            </div>
        </div>
        `
    }

    return render ();

}