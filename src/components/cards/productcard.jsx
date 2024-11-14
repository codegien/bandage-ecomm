import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ProductCard({ item }) {
	const notify = () => toast("Item added to cart!");
	return (
		<div
			className='text-center bg-lightgray shadow-sm w-[30vmin] h-[40vmin]'
			onClick={() => {
				notify;
			}}>
			<Link
				to='/itemdetails'
				state={{ item }}>
				<div className='h-[60%]'>
					<img src={item.image} />
				</div>
				<div className='p-5'>
					<h2 className=' text-lg font-bold'>{item.title}</h2>
					<p className='w-48 truncate'>{item.description}</p>
					<h2 className=' text-md font-bold text-emerald'>${item.price}</h2>
				</div>
			</Link>
		</div>
	);
}

export default ProductCard;
