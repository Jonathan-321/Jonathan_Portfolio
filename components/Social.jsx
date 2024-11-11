import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: "https://github.com/Jonathan-321" },
    { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/jonathan-muhire-aa8b06184/" },
    { icon: <FaInstagram />, path: "https://www.instagram.com/your-username" },
    { icon: <FaTwitter />, path: "https://twitter.com/your-username" },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;