
import Header from './components/Header';
import Modalpopup from './components/Modalpopup';

import {Route} from 'react-router-dom';

import Examplenew from './pages/Examplenew';
import Examplsecond from './pages/Examplsecond';


function App() {
  return (

   <div >
 <Header text="Buttons style"/>
 
  <div className="cardshow">
    <div className="card">
<h3 className="heading"> Join AARP Test</h3>
    <button className="join" > Join Today</button>
    </div>
  

  <br/>
  <Modalpopup text="Renew Modal" />
  </div>
  <body>



 
   <Route path='/example1'>
     <Examplenew></Examplenew>


   </Route>

   <Route path='/Example-2'>
<Examplsecond />

   </Route>
   </body>
   
   
   </div>



  
  );
}

export default App;


// understand - improvement adding more data - multiple data - academic train data and improve effeiciency 

//insurance industry - chatbot what is currently present - 

//nlp digitalized - 

//neural netowrks - I need help from sravan - cnn works ; - 