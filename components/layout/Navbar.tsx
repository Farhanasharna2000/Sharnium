import { ChevronRight, Mail, Phone } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const links=[
              "Home",
              "About Us",
              "Profile",
              "Products",
              "Service",
              "Our Partners",
              "Blog",
            ]

const Navbar = () => {
  
  return (
    <header>
      <Container>
        {/* topbar */}
        <div className="pb-3 pt-4 lg:pt-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#040404] font-medium">
            <span className="flex items-center gap-2">
              <Mail size={24} /> info@softvence.com
            </span>
            <span className="flex items-center gap-2">
              <Phone size={24} /> +1 629 877 7543
            </span>
          </div>
        </div>

        {/* main navbar  */}
        <nav className="w-full px-8 py-4 flex justify-between items-center bg-white rounded-full">
          {/* logo */}
          <Link
            href="/"
            className="text-lg sm:text-xl lg:text-2xl font-semibold"
          >
            Sharnium
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {links.map((link)=>(
                <NavigationMenuItem key={link}>

                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Navigation Links */}
        <NavigationMenu>
          <NavigationMenuList className="hidden md:flex space-x-6  font-medium">
            {[
              "Home",
              "About Us",
              "Profile",
              "Products",
              "Service",
              "Our Partners",
              "Blog",
            ].map((item) => (
              <NavigationMenuItem key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink
                    className={`flex items-center gap-1 hover:text-black transition ${
                      item === "Home"
                        ? "font-semibold underline underline-offset-4"
                        : ""
                    }`}
                  >
                    {item}
                    {["Profile", "Products", "Service", "Our Partners"].includes(
                      item
                    ) && <ChevronRight size={14} />}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
