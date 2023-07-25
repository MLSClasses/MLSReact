import whatsapp_icon from "../assets/img/whatsapp_icon.png";
const ChatWithUs = () => {
  window.open("https://wa.me/message/XMS5KMWBGQZLG1", "_blank");
};
const Whatsapp_icon = () => {
  return (
    <div>
      <img src={whatsapp_icon} id="whatsapp_icon" onClick={ChatWithUs} />
    </div>
  );
};
export default Whatsapp_icon;
