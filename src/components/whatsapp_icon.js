import whatsapp_icon from "../assets/img/whatsapp_icon.png";
const ChatWithUs = () => {
  window.open("https://wa.me/message/XMS5KMWBGQZLG1", "_blank");
};
const Whatsapp_icon = () => {
  return (
    <div>
<<<<<<< HEAD
      <img src={whatsapp_icon} id="whatsapp_icon" alt="whatsapp icon" onClick={ChatWithUs} />
=======
      <img src={whatsapp_icon} id="whatsapp_icon" onClick={ChatWithUs} />
>>>>>>> main
    </div>
  );
};
export default Whatsapp_icon;
