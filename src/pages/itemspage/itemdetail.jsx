import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ChevronLeftIcon from "../../components/icons/chevronleft";
import ProductCard from "../../components/cards/productcard";
import { products } from "../../data/products";
import { notify } from "../../hooks/toastconfig";
import { CartContext } from "../../context/CartContext";

function ItemDetail() {
	const location = useLocation();
	const { item } = location.state;

	const { addToCart } = useContext(CartContext);

	console.log("%%%%%%%", item);
	return (
		<section className='w-[80%]  mx-auto flex h-[100vh] overflow-hidden'>
			<div className='w-2/6 order-1 bg-firstshow bg-cover bg-center h-full'>
				<div className='p-5'>
					<h2 className=' text-lg font-bold'>Featured Product</h2>
					<p>5 items</p>
				</div>
			</div>
			<div className='w-4/6 order-2 ml-5'>
				<div className='flex items-center justify-between bg-lightgray py-5'>
					<div className='flex w-2/5 justify-between items-center'>
						<Link to='/'>
							<div className='flex w-1/3 gap-2 items-center'>
								<ChevronLeftIcon />
							</div>
						</Link>
					</div>
					<div className='w-2/5 text-2xl font-bold'>
						<h2>Bestseller</h2>
					</div>
				</div>
				<hr className='opacity-[0.25]' />
				{item && (
					<div className='  w-full items-center text-center'>
						<div className='overflow-hidden h-32 py-[2vmin]'>
							<img
								src={item.image}
								className='w-[80%] mx-auto'
							/>
						</div>
						<div className='w-[80%] mx-auto'>
							<h1 className='font-bold text-2xl py-[5vmin]'>{item.title}</h1>
							<p>{item.description}</p>
							<h1 className='font-bold text-3xl py-[5vmin]'>${item.price}</h1>

							<button
								className='bg-emerald w-80 p-2 rounded text-lightgray'
								onClick={() => {
									addToCart(item);
								}}>
								Add to cart
							</button>
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default ItemDetail;
