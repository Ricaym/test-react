import "./App.css";
import logo from "./assets/logo.png";
import profil from "./assets/profil.png";
import react from "./assets/react.png";
import html from "./assets/html.png";
import css from "./assets/css.png";
import js from "./assets/js.png";
import docker from "./assets/docker.png";
import Header from "./components/header";
import Footer from "./components/footer";
import Accueil from "./components/accueil";
import About from "./components/about";
import Experiences from "./components/experiences";
import Portfolio from "./components/portfolio";
import Account from "./components/account";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/test_git',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Accueil react={react} html={html} css={css} js={js} docker={docker}/>
                <Footer/>
            </div>
    },
    {
        path: '/about',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <About/>
                <Footer/>
            </div>
    },
    {
        path: '/experiences',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Experiences/>
            </div>
    },
    {
        path: '/portfolio',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Portfolio/>
            </div>
    },
    {
        path: '/account',
        element:
            <div className="App">
                <link rel="icon" type="image/png" href={logo}></link>
                <title>Aymeric Chassagne</title>
                <Header logo={logo} profil={profil}/>
                <Account/>
            </div>
    }
])

function App() {
    return <RouterProvider router={router}/>
}

export default App;