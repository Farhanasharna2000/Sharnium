import { ChevronRight, Mail, Phone, PhoneCall } from "lucide-react";
import Container from "./Container";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
  { name: "Home", path: "home" },
  { name: "About Us", path: "about-us" },
  { name: "Profile", path: "profile" },
  { name: "Products", path: "products" },
  { name: "Service", path: "service" },
  { name: "Our Partners", path: "our-partners" },
  { name: "Blog", path: "blog" },
];

const Navbar = () => {
  return (
    <header>
      <Container>

        {/* topbar */}
        <div className="pb-3 pt-4 lg:pt-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-[#040404] font-medium">
            <span className="flex items-center gap-2 px-8 ">
              <Mail size={24} /> info@sharnium.com
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
            className="text-lg sm:text-xl lg:text-2xl font-semibold "
          >
            Sharnium
          </Link>

          {/* navigation links */}
          <NavigationMenu>
            <NavigationMenuList className="hidden lg:flex space-x-6  font-medium ">
              {links.map((link, idx) => (
                <NavigationMenuItem key={idx}>
                    <NavigationMenuLink
                   asChild
                    >
                  <Link href={link.path}    className={`flex flex-row gap-2 items-center hover:bg-none ${
                        link.name === "Home"
                          ? "font-bold underline underline-offset-4"
                          : ""
                      }`}>
                      {link.name}
                      {[
                        "Profile",
                        "Products",
                        "Service",
                        "Our Partners",
                      ].includes(link.name) && <ChevronRight size={16} />}
                  </Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* contact button  */}
          <Button className=" rounded-4xl font-semibold py-2 px-4 ">
            <Link href="/contact" className="flex items-center gap-2">
              <PhoneCall size={24} />
              Contact us
            </Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
