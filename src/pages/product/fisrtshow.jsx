import React from "react";
import ChevronLeftIcon from "../../components/icons/chevronleft";
import ChevronRightIcon from "../../components/icons/chevronright";
import ProductCard from "../../components/cards/productcard";
import { products } from "../../data/products";

function FisrtShow() {
	return (
		<section className='w-[80%]  mx-auto flex h-[100vh] overflow-hidden'>
			<div className='w-2/6 hidden sm:block order-1 bg-firstshow bg-cover bg-center h-full'>
				<div className='p-5'>
					<h2 className=' text-lg font-bold'>Featured Product</h2>
					<p>5 items</p>
				</div>
			</div>
			<div className='w-4/6 order-2 ml-5'>
				<div className='flex items-center justify-between bg-lightgray py-5'>
					<div className='w-1/5 text-2xl font-bold'>
						<h2>Bestseller</h2>
					</div>
					<div className='flex w-4/5 justify-between items-center'>
						<ul className='flex w-2/3 gap-5'>
							<li>Men</li>
							<li>Women</li>
							<li>Accessories</li>
						</ul>

						<div className='flex w-1/3 gap-2 items-center'>
							<ChevronLeftIcon />
							<ChevronRightIcon />
						</div>
					</div>
				</div>
				<hr className='opacity-[0.25]' />
				{products && (
					<div className='flex flex-wrap p-5 gap-4 '>
						{products.map((item) => (
							<ProductCard
								key={item.id}
								item={item}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}

export default FisrtShow;
