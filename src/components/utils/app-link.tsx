// common link component 
import {PropsWithChildren} from "react"; 
import { cn } from "@/lib/utils";
import Link from "next/link";

interface AppLinkProps {
    text?: string; 
    title: string; 
    href: string; 
    icon?: React.ReactNode; 
    afterIcon?: React.ReactNode;
    className?: string;
    target?: string;  
}

const AppLink: React.FC<AppLinkProps & PropsWithChildren> = (
    {text, title, href, icon, afterIcon, className, target, children}
) => (
    <Link
        href={href}
        title={title}
        className={cn("flex items-center gap-2 text-sm lg:text-md hover:text-primary-color duration-700", className)}
        target={target}
    >
        {icon && icon}
        {text && <span className="flex-1">{text}</span>}
        {children && children}
        {afterIcon && afterIcon}
    </Link>
);

export default AppLink; 