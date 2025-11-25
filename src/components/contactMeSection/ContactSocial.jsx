import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link={import.meta.env.VITE_LINKEDIN_URL} Icon={FaLinkedinIn} />
      
      {/* GitHub Link */}
      <SingleContactSocial link={import.meta.env.VITE_GITHUB_URL} Icon={FiGithub} />

      {/* LeetCode Link */}
      <SingleContactSocial link="https://leetcode.com/royalsachan" Icon={SiLeetcode} />

      <SingleContactSocial link="https://www.instagram.com/royals_sachan/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
