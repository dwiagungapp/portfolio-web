import React, { Fragment } from 'react';
import getConfig from 'next/config';
import Link from 'next/link';
import { Footer } from '../components/Footer';
import { links, SEO } from '../config/config';
import { Header } from '../components/Header';

const { publicRuntimeConfig } = getConfig();

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <div className="flex flex-col justify-between bg-secondary min-h-screen">
        <div className="py-5 px-5 container flex flex-col items-center justify-center">
          <img className="w-40 h-40 mb-3" src={links.image} alt="profile" />
          <h3 className="text-xl font-bold mb-3">{links.title}</h3>
          <p className="text-center">{links.description}</p>
          <div className="mt-5 flex flex-wrap justify-center">
            {links.cards.map((value, index) => (
              <Button key={index} title={value.title} link={value.link} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
}

function Button({ title, link }) {
  return (
    <div className="mx-4 my-2">
      <div className="card card-work p-3 w-64">
        <Link href={link}>
          <a target="_blank" rel="noreferrer" className="text-primary font-bold">{title}</a>
        </Link>
      </div>
    </div>
  );
}


// import React, { Fragment } from 'react';
// import getConfig from 'next/config'
// import Link from 'next/link';
// import { Footer } from '../components/Footer';
// import { links, SEO, } from '../config/config';
// import { Header } from '../components/Header';

// const { publicRuntimeConfig } = getConfig()

// export default function Home() {
//   return (
//     <Fragment>
//       <Header seo={SEO} />
//       <div className="d-flex flex-column justify-content-between bg-secondary min-vh-100">
//         <div className="py-5 px-5 container text-center">
//           <img className="img-fluid my-3 card-image" width="150" height="150" src={links.image} alt="profile of hashirshoaeb" />
//           <h3 className="mt-3">{links.title}</h3>
//           <p>{links.description}</p>
//           {links.cards.map((value, index) => (
//             <Button key={index} title={value.title} link={value.link} />
//           ))}
//         </div>
//         <Footer />
//       </div>
//     </Fragment>
//   );
// }


// function Button({ title, link }) {
//   return (
//     <div className="row justify-content-center">
//       <div className="card card-work mx-sm-4 my-2" style={{ width: "20rem" }}>
//         <Link href={link}>
//           <a target="_blank" rel="noreferrer">
//             <h4 className="text-primary py-3 px-3">{title}</h4>
//           </a>
//         </Link>
//       </div>
//     </div>
//   );
// }