import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import CartIcon from "../icons/carticon";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ item }) {
	const { addToCart } = useContext(CartContext);
	return (
		<div className='text-center bg-lightgray shadow-sm w-[30vmin] h-[40vmin]'>
			<Link
				to='/itemdetails'
				state={{ item }}>
				<div className='h-[60%]'>
					<img src={item.image} />
				</div>
				<div className='p-5'>
					<h2 className=' text-lg font-bold'>{item.title}</h2>
					<p className='w-48 truncate'>{item.description}</p>
					<div className='flex justify-between'>
						<h2 className=' text-md font-bold text-emerald'>${item.price}</h2>
						<span
							onClick={() => {
								addToCart(item);
							}}>
							<CartIcon />
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default ProductCard;
