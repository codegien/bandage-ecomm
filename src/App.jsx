import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/navbar/nav";
import FisrtShow from "./pages/product/fisrtshow";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div>
				<Navbar />
				<FisrtShow />
				<ToastContainer />
			</div>
		</>
	);
}

export default App;
