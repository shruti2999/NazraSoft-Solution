"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
};

export default function Section3() {
    return (
        <>
            
            <section className="marketing-agency-home-section-3 position-relative overflow-hidden py-120 bg-secondary-2">
                <div className="container">
                    <div className="text-center">
                        <span className="content-top btn-text text-primary d-flex align-items-center justify-content-center">
                            <div className="line" />
                            <span className="mx-3">our services</span>
                            <div className="line" />
                        </span>
                        <h2 className="mt-3 mb-80 text-anime-style-2">Company expertise</h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <Swiper {...swiperOptions} className="swiper slider-6 ps-3">
                        <div className="swiper-wrapper z-1 align-items-center">
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={0}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-1.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">SEO Service</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={200}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-2.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">Website Development</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={400}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-3.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">UI &amp; UX Design</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={600}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-4.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">Social Marketing</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={800}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-5.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">24/7 Online Support</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="card-service position-relative d-inline-flex" data-aos="zoom-in" data-aos-delay={1000}>
                                    <img src="assets/imgs/pages/marketing-agency/page-home/home-section-3/img-2.png" alt="AstraX" />
                                    <div className="position-absolute bottom-0 start-0">
                                        <Link href="#">
                                            <h6 className="fw-semibold m-4 text-white">Website Development</h6>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
