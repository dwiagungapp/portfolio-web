
import profile from './profile.png';
import agnis from './agnis.png';
import noimage from './noimage.png';
import jobskuweb from './jobskuweb.png';

import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Home",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Helo, Saya Agung",
	description: "Nama lengkap saya Dwi Agung Prayogi. Saya adalah seorang Frontend Developer.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "My CV",
			link: "https://drive.google.com/file/d/1pAyB3lwSeR-HfzJOMQOYe6ti2NbPwYhJ/view?usp=share_link",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Tentang Saya",
	description: [
		"Saya adalah seorang Frontend Developer yang saat ini sedang menempuh pendidikan Teknik Informatika di Universitas Dian Nusantara",
		"Saya mempunyai pengalaman bekerja kurang lebih 3 tahun pada bidang staff setter di perusahaan buku dan juga sebagai QC Raw Material di perusahaan farmasi. Dapat bersosialisasi, mudah beradaptasi, dan dapat bekerja sama dengan tim. Menjadi pribadi yang ramah, sopan, dan bertanggung jawab di dalam pekerjaan maupun di luar pekerjaan.",
		],
}

export const work = {
	title: "Kemampuan",
	cards: [
		{
			title: "Web Development",
			description: "Saya membuat website dengan ReactJS, NextJS, dan Wordpress.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projek Saya",
	cards: [
		{
			title: "Agnis Shop",
			image: agnis.src,
			description: "Sebuah toko online produk kecantikan wanita, saya buat menggunakan Wordpress, Woocommerce, dan template SaudagarWP.",
			link: "https://agnis.shop"
		},
		{
			title: "Jobsku Portal",
			image: jobskuweb.src,
			description: "Desain frontend web pencarian kerja yang saya buat dengan menggunakan ReactJS, untuk api lowongan kerja saya menggunakan rest api dari Sanbercode.",
			link: "https://jobsku-portaljob.vercel.app/"
		},
		{
			title: "Blog CMS",
			image: noimage.src,
			description: "Sebuah blog yang saya buat dengan NextJS dan Sanity.",
			
		},
	],
}

export const contact = {
	title: "Kontak Saya",
	description: "Temukan saya di sini.",
	buttons: [
		{
			title: "Chat Whatsapp",
			link: "https://wa.me/+6285155279992",
			isPrimary: true,
		},
		{
			title: "Email saya",
			link: "mailto:dwiagungapp@gmail.com",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Dwi Agung Prayogi | Portfolio Web",
	description: "I create websites. Saat ini saya sedang menempuh pendidikan Teknik Informatika di Universitas Dian Nusantara.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "Dwi Agung Prayogi",
	description: "Frontend Developer",
	cards: [
		{
			title: "My website",
			link: "https://dwiagung.me/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}