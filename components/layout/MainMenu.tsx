"use client";
import Link from "next/link";

export default function MainMenu() {
    return (
        <ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/">
                    <span>Home</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/about">
                    <span>About</span>
                </Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-uppercase" href="/services">
                    <span>Services</span>
                </Link>
            </li>
            <li className="nav-item ">
                <Link className="nav-link text-uppercase" href="/blog">
                    <span>Blog</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-uppercase" href="/contact">
                    <span>Contact</span>
                </Link>
            </li>
        </ul>
    );
}
