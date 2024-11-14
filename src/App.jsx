import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/navbar/nav";
import FisrtShow from "./pages/product/fisrtshow";
import ItemDetail from "./pages/itemspage/itemdetail";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<FisrtShow />}
				/>
				<Route
					path='/itemdetails'
					element={<ItemDetail />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
