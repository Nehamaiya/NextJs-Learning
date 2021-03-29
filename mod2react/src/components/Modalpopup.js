import Modalshow from './Modalshow';
import Modalnew from './Modalnew';
import {useState} from 'react'



function Modalpopup(props)
{
    const [popupopen, setpopupopen]= useState(false);
    const [popupnew, setpopupnew]= useState(false);
    // 2nd function taht changes the value 


    function renewclick()
    {
       setpopupopen(true);
       
    }

    function closemodal()
    {
        setpopupopen(false);
    }
    function opennewmodal()
    {
        alert('success');
        setpopupnew(true);


    }
    function closenew()
    {
        setpopupnew(false);
        setpopupopen(false);
    }
    


    return (
    
        <div className='card'>
            <h2>{props.text}</h2>
   
      
            <button className="join" style={{backgroundColor: "blue"}} onClick={renewclick} > Renew</button>

                {popupopen && <Modalshow onCancel={closemodal} onConfirm={opennewmodal} /> }
                {popupnew && <Modalnew onCancel={closenew} />}

            </div>
   


    );

}
export default Modalpopup;