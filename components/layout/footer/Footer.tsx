import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer>
                <div className="section-footer-4 position-relative overflow-hidden bg-dark">
                    <img className="position-absolute bottom-0 end-0" data-aos="fade-left" data-aos-delay={400} src="assets/imgs/pages/ai-solutions/page-home/home-section-7/bg-bottom.png" alt="NazraSoft" />
                    <div className="container-fluid">
                        <div className="container position-relative z-2">
                            <div className="py-120 d-flex flex-wrap gap-4 justify-content-between">
                                <div>
                                    <h3 className="text-primary btn-text pb-3">Quick Links</h3>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="#">
                                            <p>Need Quotation</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Privacy</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Disclaimer</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Terms &amp; Conditions </p>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-primary btn-text pb-3">COMPANY</h3>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="#">
                                            <p>Home</p>
                                        </Link>
                                        <Link href="#">
                                            <p>About</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Services</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Contact</p>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-primary btn-text pb-3">Help</h3>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="#">
                                            <p>Customer Support</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Delivery Details</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Privacy Policy</p>
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-primary btn-text pb-3">services</h3>
                                    <div className="d-flex flex-column align-items-start">
                                        <Link href="#">
                                            <p>WordPress</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Logo design</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Social Media Management</p>
                                        </Link>
                                        <Link href="#">
                                            <p>Web development</p>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="d-flex flex-column flex-lg-row gap-3 align-items-center py-4 border-top justify-content-between">
                                <p className="m-0 text-center">
                                    Copyright &amp; design by
                                    <Link href="/contact" className=" ">
                                        <span className="text-white fw-medium">©NazraSoft</span>
                                    </Link>
                                    2025, All Rights Reserved
                                </p>
                                <ul className="list-unstyled d-flex mb-0 justify-content-center ms-lg-auto">
                                    <li>
                                        <Link href="#">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                    <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="ms-3">
                                        <Link href="#">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="ms-3">
                                        <Link href="#">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2 .6-8.7 .6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="ms-3">
                                        <Link href="#">
                                            <span className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path className="fill-white" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
