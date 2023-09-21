import { whatsapp_icon } from "../pages/mls_constants";

const ChatWithUs = () => {
  window.open("https://wa.me/message/XMS5KMWBGQZLG1", "_blank");
};
const Whatsapp_icon = () => {
  return (
    <div>
      <img
        src={whatsapp_icon}
        id="whatsapp_icon"
        alt="whatsapp icon"
        onClick={ChatWithUs}
      />
    </div>
  );
};
export default Whatsapp_icon;
