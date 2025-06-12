import Link from "next/link";

export default function Section6() {
    return (
        <section className="ai-solutions-home-section-6 position-relative overflow-hidden py-120">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-12 text-center">
                        <h2 className="fw-bold">Our Client</h2>
                    </div>
                </div>

                <div className="row g-4">
                    {[
                        { img: "img1.png", text: "Pofitswipe" },
                        { img: "img2.png", text: "EIM" },
                        { img: "img3.png", text: "Gyan Pathshala" },
                        { img: "img4.png", text: "eim branding" },
                        { img: "img5.png", text: "Nextmove" },
                        { img: "img6.png", text: "Complete Nutritian" },
                    ].map((item, index) => (
                        <div className="col-lg-4 col-md-6 col-12" key={index}>
                            <div className="backdrop-filter-20 rounded-3 p-4 position-relative z-1 text-center hover-up h-100">
                                <img
                                    src={`assets/imgs/pages/ai-solutions/page-home/home-section-6/${item.img}`}
                                    alt="NazraX"
                                    className="img-fluid"
                                />
                                <p className="btn-text text-black mb-0 mt-4">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
