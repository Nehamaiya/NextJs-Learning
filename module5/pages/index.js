

// // exceute when build script - async but can execute - ISR  - continously updated even after deployment - interval times - incoming requests; 



// // changes frequently after page deployed - like database - changes everytime search button is clicked 

// // prebuild page - include std react code - Useeffect?? - some pre rendered - latest and update after the data is loaded - but maybe not recent data 


//       // examples: [{ id: "e1", title: "Example 1", description: "Example 1 shows a lot of examples"}],
//       examples: data.examples
//       // props - fetched from backend are passed as a value to the object - when it executes the main function



import path from 'path';
import fs from 'fs/promises';

import Link from 'next/link';

function Home(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log('(Re-)Generating every 6 seconds');
  const filePath = path.join(process.cwd(), 'data', 'backend.json');
  const readfile = await fs.readFile(filePath);
  const data = JSON.parse(readfile);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
}

export default Home;
