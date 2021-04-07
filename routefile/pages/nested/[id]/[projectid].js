import { useRouter } from 'next/router'

function projectid() {
    const route = useRouter();
    // Router object - gives methods 

    console.log(route.query);
    return ( <div>
  <h1>Specific project</h1>
  
    </div>
    );
  }
  export default projectid;