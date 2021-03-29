
function Modalshow(props)
{
    function popupone()
    {
props.onConfirm();
    }

    function popupclose()
    {
props.onCancel();
    }

    

    return (
    
        <div className='modal'>
            <p> Do you want to renew?</p>
            <button onClick={popupone}>
                Yes
            </button>
        
            &nbsp; &nbsp;
            <button onClick={popupclose}>
                No
            </button>
         </div>
   


    );

}
export default Modalshow;