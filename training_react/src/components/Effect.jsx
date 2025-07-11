import React, { useEffect } from 'react'

const ShowMessage = () => {
    const [showMessage,setShowMessage]=useState(false);
    const navigate = useNavigate()
    function fn(){
        console.log("hello");
    }
    useEffect(()=>{
        fn();
    },[showMessage])
    return(
        <div className="flex justify-center items-center text-[48px]" onClick={()=>setShowMessage(!showMessage)} >
            click
        </div>
    )
}