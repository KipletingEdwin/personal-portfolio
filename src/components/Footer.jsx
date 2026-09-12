import { navLinks, socialLinks } from "../data/content";
import * as Icons from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          MERN Stack<span>Developer</span>
        </p>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href}>{link.label}</a>
          ))}
        </nav>
        <div>
          {socialLinks.map((social) => {
            const Icon = Icons[social.icon];
            return (
              <a key={social.icon}>
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <p>
        Copyright © {new Date().getFullYear()} Edwin Kipleting | All Rights
        Reserved
      </p>
    </footer>
  );
};

export default Footer;
