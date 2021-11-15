import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="bg-purple-900 py-8 px-12">
			<div className="container m-auto flex justify-between items-center flex-wrap">
				<div className="text-base text-white text-center sm:text-left w-full sm:w-auto">© {new Date().getFullYear()} Fil Bryan. All rights reserved</div>
				<div className="text-base text-white flex justify-center sm:justify-end space-x-2 items-center w-full sm:w-auto sm:mt-0 mt-4">
					<span className="cursor-pointer">
						<a href="https://web.facebook.com/filbryan" rel="noreferrer" target="_blank">
							<FaFacebookF />
						</a>
					</span>
					<span className="cursor-pointer">
						<a href="https://twitter.com/BryanEgos" rel="noreferrer" target="_blank">
							<FaTwitter />
						</a>
					</span>
					<span className="cursor-pointer">
						<a href="https://www.linkedin.com/in/fil-bryan-egos-a5104910a/" rel="noreferrer" target="_blank">
							<FaLinkedinIn />
						</a>
					</span>
					<span className="cursor-pointer">
						<a href="https://www.instagram.com/filbryan/" rel="noreferrer" target="_blank">
							<FaInstagram />
						</a>
						</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
