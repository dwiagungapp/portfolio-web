import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className="flex flex-wrap items-center">
					<div className="w-full sm:w-1/2">
						<h1 className="text-primary font-bold text-6xl mb-4">{title}</h1>
						<p className="mb-4">{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="w-full sm:w-1/2 flex justify-center">
						<img
							className="my-3 card-image w-64 h-64 object-cover rounded-full"
							src={image}
							alt="profile"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary font-bold text-4xl mb-4">{title}</h1>
				<div className="px-5">
					{description.map((value, index) => (
						<p key={index} className="mb-2">{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}



// import React from 'react';
// import getConfig from 'next/config'
// import Link from 'next/link'

// const { publicRuntimeConfig } = getConfig()

// export const Intro = ({ title, description, image, buttons }) => {
// 	return (
// 		<div className="bg-secondary py-5 px-5">
// 			<div className="container">
// 				<div className=" row align-items-center">
// 					<div className="col-sm-6">
// 						<h1 className="text-primary fw-bold display-3">{title}</h1>
// 						<p>{description}</p>
// 						<div className="text-center">
// 							{buttons.map((value, index) => (
// 								(value.isPrimary) ?
// 									<Link key={index} href={value.link}>
// 										<a className="btn btn-primary my-1 mx-3">{value.title}</a>
// 									</Link>
// 									:
// 									<Link key={index} href={value.link}>
// 										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
// 									</Link>
// 							))}
// 						</div>
// 					</div>
// 					<div className="col-sm-6 text-center">
// 						<img
// 							className="img-fluid my-3 card-image" width="250"
// 							height="250" src={image}
// 							alt="profile of hashirshoaeb"
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export const About = ({ title, description }) => {
// 	return (
// 		<div id="about" className="bg-white py-5 px-5">
// 			<div className="container">
// 				<h1 className="text-primary fw-bold">{title}</h1>
// 				<div className="px-sm-5">
// 					{description.map((value, index) => (
// 						<p key={index} >{value}</p>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }