import React from "react";
import BandageLogo from "../icons/bandagelogo";
import SearchIcon from "../icons/searchicon";
import CartIcon from "../icons/carticon";
import FavIcon from "../icons/favouriteicon";

function Navbar() {
	return (
		<header className='flex w-full bg-lightgray px-20 py-8'>
			<div className='w-1/5'>
				<BandageLogo />
			</div>
			<div className='w-4/5  flex justify-between '>
				<ul className='flex w-2/3 justify-between '>
					<li>Home</li>
					<li>About</li>
					<li>Shop</li>
					<li>Blog</li>
					<li>Contact</li>
					<li>Pages</li>
				</ul>

				<div className='flex w-1/3 justify-between items-center'>
					<span>Regist/Login</span>
					<SearchIcon />
					<CartIcon />
					<FavIcon />
				</div>
			</div>
		</header>
	);
}

export default Navbar;
