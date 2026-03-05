import { forwardRef } from "react"
import { NavLink, type NavLinkProps } from "react-router-dom";
import { cn } from "../lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps,"ClassName"> {
    className?:string;
    activeClassName?:string;
    pendingClassName?:string;
}

const NavLinks = forwardRef<HTMLAnchorElement,NavLinkCompatProps>(
    ({ className , activeClassName , pendingClassName , to , ...props}, ref)=>{
        return(
            <NavLink 
                ref={ref}
                to={to}
                className={({isActive , isPending}) => 
                    cn(className, isActive && activeClassName, isPending && pendingClassName)
                }{...props}
            />
        );
    },
);

export default NavLinks;