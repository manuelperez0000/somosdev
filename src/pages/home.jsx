import Nav from "../components/nav"
const Home = () => {
    return <div className="container">
        <div className="row">
            <div className="col-12">
                <Nav />
                <h1 className="principal-h1">
                    Impulsa tu Negocio con
                    Aplicaciones Web Modernas
                </h1>
                <p className="main-paragraph">
                    Creamos tu sitio web en tiempo record y al
                    costo mas accesible del mercado
                </p>
                <div className="text-center mt-5">
                    <button> Conoce nuestros planes premium </button>
                </div>
            </div>
        </div>
    </div>
}

export default Home