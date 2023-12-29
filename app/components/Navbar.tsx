"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

const Navigation = () => {
  const scrollToElement = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Navbar className="bg-slate-100 sticky top-0 z-10">
      <NavbarBrand as={Link} href="#">
        <img
          src="/img/Logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="SDN TALAGA 2 CIANJUR LOGO"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          SDN TALAGA 2 CIANJUR
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink
          onClick={() => scrollToElement("home")}
          className="cursor-pointer"
        >
          Homef
        </NavbarLink>
        <NavbarLink
          onClick={() => scrollToElement("about")}
          className="cursor-pointer"
        >
          About
        </NavbarLink>
        <NavbarLink
          onClick={() => scrollToElement("gallery")}
          className="cursor-pointer"
        >
          Gallery
        </NavbarLink>
        <NavbarLink
          onClick={() => scrollToElement("kontak")}
          className="cursor-pointer"
        >
          Kontak
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Navigation;
