import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function Home() {
  // not sending a http request using link
  return ( <div>
<h1>File routing</h1>
<ul>


<li>

  <Link replace href="/service/services">Services</Link>
</li>
<li>
  <Link href="/nested">Nested</Link>
</li>


</ul>
  </div>
  );
}
export default Home;