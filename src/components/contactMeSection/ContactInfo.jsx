import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { animated, useSpring } from "@react-spring/web";

const ContactInfo = () => {
  const style = useSpring({ from: { opacity: 0, x: -20 }, to: { opacity: 1, x: 0 }, config: { tension: 200, friction: 24 } });

  return (
    <animated.div 
      className="flex flex-col gap-6  "
      style={style}
    >
      <SingleInfo text="royalsachaniiitm@gmail.com" Image={HiOutlineMail}  />
      <SingleInfo text="+917068635123" Image={FiPhone} />
      <SingleInfo text="Kanpur, Uttar Pradesh" Image={IoLocationOutline} />
    </animated.div>
  );
};

export default ContactInfo;
