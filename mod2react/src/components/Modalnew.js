function Modalnew(props)
{
  
    function popupclosed()
    {
props.onCancel();
    }

    

    return (
    
        <div className='modal'>
            <p> Successfully Renewed</p>
            <button onClick={popupclosed}>
                Ok
            </button>
        
          
         </div>
   


    );

}
export default Modalnew;