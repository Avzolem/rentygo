import SocialIcon from "@/components/icons/Social";
//EDIT ME PLEASE
const copyrightLabel = `©${new Date().getFullYear()} HackDogs. All rights reserved.`;
const socialLink = [
    {
        name: "Facebook",
        href: "#",
        icon: "facebook",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/avsolem/",
        icon: "instagram",
    },
    {
        name: "TikTok",
        href: "https://www.tiktok.com/@avsolem",
        icon: "tiktok",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/avsolem",
        icon: "twitter",
    },
    {
        name: "Discord",
        href: "https://discord.gg/cvQyBHF2Dz",
        icon: "discord",
    },
];

const Footer = () => {
    return (
        <footer className="z-[100] mt-auto ">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socialLink.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-cyan-500 "
                        >
                            <div className="iconcontainer h-6 w-6 cursor-pointer text-cyan-500 hover:text-purple-500">
                                <SocialIcon type={item.icon} />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-base text-purple-500 hover:text-black">
                        {copyrightLabel}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
