import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router'
function exampleid()
{
    const route = useRouter();
    // Router object - gives methods 

    console.log(route.pathname);
    console.log(route.query);
    return (
        <div>
           <h1> Example Id related</h1>
        </div>
    )
}

export default exampleid;