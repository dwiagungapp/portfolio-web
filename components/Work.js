import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'


export const Skills = ({ title, cards }) => {
	return (
	  <div id="skills" className="bg-secondary py-5 px-5">
		<div className="container">
		  <h1 className="text-primary font-bold text-4xl">{title}</h1>
		  <div className="flex flex-row flex-wrap justify-center">
			{cards.map((value, index) => (
			  <Card3
				key={index}
				title={value.title}
				description={value.description}
				link={value.link}
			  />
			))}
		  </div>
		</div>
	  </div>
	);
  }
  
  function Card3({ title, description, link }) {
	return (
	  <div className="max-w-sm mx-auto my-3 px-6 py-4 bg-white rounded-lg shadow-md">
		<div className="font-bold text-xl mb-2">{title}</div>
		<p className="text-gray-700 text-base">{description}</p>
	  </div>
	);
  }

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container mx-auto">
				<h1 className="text-light text-4xl font-bold mb-4">Projek Saya</h1>
				<div className="flex flex-wrap justify-center">
					{cards.map((value, index) => (
						<CardProject
							key={index}
							title={value.title}
							image={value.image}
							description={value.description}
							link={value.link}
							icons={value.icons} />
					))}
				</div>
			</div>
		</div>
	);
}

export const CardProject = ({ title, image, description, link }) => {
	return (
		<div className="card py-3 px-3 mx-4 my-4 card-work max-w-xs rounded-lg shadow-md">
			<h4 className="text-primary font-bold">{title}</h4>
			<img className="my-1 h-250 w-full rounded-md grow" src={image} alt="project" />
			<br/><br/>
			<p className="text-dark ">{description}</p>
			<a href={link} target="_blank" rel="noreferrer" className="mt-4 bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full inline-block ">
				Lihat projek
			</a>
		</div>
	);
}