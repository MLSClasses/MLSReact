
import { useState } from "react";
import { whatsapp_icon } from "../pages/mls_constants";
import { useEffect } from "react";

const ChatWithUs = () => {
  window.open("https://wa.me/message/XMS5KMWBGQZLG1", "_blank");
};
const Whatsapp_icon = () => {
  const loc= window.location.pathname;
  const [template,setTemplate]=useState();
  const [show,setShow]= useState(false);
  useEffect(()=>{
    if (loc === '/sat_workshop'){
      setShow(true);
    }
    return ()=>{
      setShow(false);
    }
  },[])
  
  return (
 (!show && <div>
  <img
    src={whatsapp_icon}
    id="whatsapp_icon"
    alt="whatsapp icon"
    onClick={ChatWithUs}
  />
</div> )
  );
};
export default Whatsapp_icon;
