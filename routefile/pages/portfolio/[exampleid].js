import { route } from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router'
function examplenew()
{
    const route = useRouter();
    // Router object - gives methods 


    console.log(route.query);
    return (
        <div>
           <h1> Example New</h1>
        </div>
    )
}

export default examplenew;