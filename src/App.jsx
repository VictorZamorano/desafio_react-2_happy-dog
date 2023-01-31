import Navbar from "./assets/componets/Navbar";
import Home from "./assets/pages/Home";
import Contacto from "./assets/pages/Contacto";
import Footer from "./assets/componets/Footer";
import NotFound from "./assets/pages/NotFound";

import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header>
				<Navbar></Navbar>
			</header>

			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contacto" element={<Contacto />} />
					<Route path="/*" element={<NotFound />} />
				</Routes>
			</main>
			<footer>
				<Footer></Footer>
			</footer>
		</div>
	);
}

export default App;
