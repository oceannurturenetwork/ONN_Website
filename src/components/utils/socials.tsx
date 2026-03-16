import { AppLink, AppLinkButton } from "../utils";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { cn } from "@/lib/utils";
const ICON_SIZE = 18;

export const Socials = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex flex-col gap-4 items-center bg-white justify-center fixed shadow-sm px-2 py-3 z-[100] top-1/2 right-0 -mt-[6.5rem] -translate-x-1/2 -translate-y-1/2",
      className,
    )}
  >
    <SocialButton
      title={"instagram"}
      icon={<FaInstagram size={ICON_SIZE} />}
      href="http://instagram.com/ocean_nurture_network/"
    />
    <SocialButton
      title={"facebook"}
      icon={<FaFacebook size={ICON_SIZE} />}
      href="https://www.facebook.com/people/Ocean-Nurture-Network/61565839380630/?name=xhp_nt__fb__action__open_user"
    />
    <SocialButton
      title={"tiktok"}
      icon={<FaTiktok size={ICON_SIZE} />}
      href="https://www.tiktok.com/@oceannurturenetwork"
    />
    <SocialButton
      title={"linkedin"}
      icon={<FaLinkedin size={ICON_SIZE} />}
      href="https://www.linkedin.com/company/ocean-nurture-network1/"
    />
  </div>
);

const SocialButton = ({
  href,
  icon,
}: {
  title: string;
  href: string;
  icon: React.ReactNode;
}) => (
  <AppLinkButton
    href={href}
    type="ghost"
    size="icon"
    target="_blank"
    className="relative w-5 h-5 overflow-hidden hover:text-primary-color duration-700"
  >
    {icon}
  </AppLinkButton>
);
