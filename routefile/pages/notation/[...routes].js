import { useRouter } from 'next/router';

function notations() {
    const route = useRouter();


    console.log(route.query);
    return ( <div>
  <h1>Notation page</h1>
  
    </div>
    );
  }
  export default notations;