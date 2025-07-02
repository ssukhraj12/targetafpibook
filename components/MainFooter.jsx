import {Icon} from "@iconify/react";
import Link from "next/link";

export default function MainFooter() {
    return (
        <>
            <section id={'footer'} className={'pt-4 pb-3'}>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-4 col-lg-3 mb-4 mb-lg-0">
                            <h4 className={'fw-bold'}>Target Afpi Book</h4>
                            <p className={'mb-1 text-light'}>
                                Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses
                            </p>
                            <a href="#" className={'link-light d-block mb-3'}>Read More</a>
                            <h4 className={'fw-bold'}>Our Address</h4>
                            <p className={'mb-1 text-light'}>Near Forest Complex, Sector 68, Kumbra, Sahibzada Ajit Singh Nagar</p>
                            <p className={'mb-1 text-light'}>Mohali, 160055</p>
                            <p className={'mb-1 text-light'}>Punjab, IN</p>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3 mb-4 mb-lg-0">
                            <h4 className={'fw-bold'}>Our Contacts</h4>
                            <ul className={'list-unstyled'}>
                                <li className={'d-flex mb-3'}>
                                    <div className="icon-link rounded-circle d-none d-sm-inline-flex">
                                        <Icon icon={'mdi:phone-outline'} className={'fs-4 text-light fw-bold'}/>
                                    </div>
                                    <div className={'ms-2'}>
                                        <div className={'small lh-1 text-uppercase fw-semibold text-light opacity-75'}>Call Us Now</div>
                                        <a href={'tel:+919041536379'} className={'lh-1 fs-5 text-decoration-none fw-bold'}>
                                            904-153-6379
                                        </a>
                                    </div>
                                </li>
                                <li className={'d-flex mb-3'}>
                                    <div className="icon-link rounded-circle d-none d-sm-inline-flex">
                                        <Icon icon={'mdi:whatsapp'} className={'fs-4 text-light fw-bold'}/>
                                    </div>
                                    <div className={'ms-2'}>
                                        <div className={'small lh-1 text-uppercase fw-semibold text-light opacity-75'}>WhatsApp</div>
                                        <a href={'https://api.whatsapp.com/send/?phone=919041536379&text=Hi+need+more+information+about+Target+Afpi+Book+Please+contact+me.'}
                                           className={'lh-1 fs-5 text-decoration-none fw-bold'} target={'_blank'}>
                                            904-153-6379
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/contact" className={'btn px-3 btn-outline-dark border-light fw-bold'}>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-0">
                            <h4 className={'fw-bold'}>Links</h4>
                            <ul className={'nav flex-column'}>
                                <li className={'nav-item'}><Link href="/blog" className={'nav-link'}>Blog</Link></li>
                                <li className={'nav-item'}><Link href="/gallery" className={'nav-link'}>Gallery</Link></li>
                                <li className={'nav-item'}><a href="#" className={'nav-link'}>Testimonials</a></li>
                                <li className={'nav-item'}><a href="#" className={'nav-link'}>Privacy Policy</a></li>
                                <li className={'nav-item'}><a href="#" className={'nav-link'}>Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2 mb-4 mb-md-0">
                            <h4 className={'fw-bold'}>About</h4>
                            <ul className={'nav flex-column'}>
                                <li className={'nav-item'}><Link href="/about" className={'nav-link'}>About us</Link></li>
                                <li className={'nav-item'}><Link href="/contact" className={'nav-link'}>Contact Us</Link></li>
                                <li className={'nav-item'}><Link href="/our-courses" className={'nav-link'}>Our Courses</Link></li>
                                <li className={'nav-item'}><a href="#" className={'nav-link'}>Buy Book</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 col-lg-2">
                            <h4 className={'fw-bold'}>Follow Us</h4>
                            <ul className={'nav flex-column'}>
                                <li className={'nav-item'}>
                                    <a href="#" className={'nav-link'}>
                                    <Icon icon={'mdi:facebook'} className={'fs-4 text-light'}/>
                                    Facebook
                                </a>
                                </li>
                                <li className={'nav-item'}>
                                    <a href="#" className={'nav-link'}>
                                        <Icon icon={'mdi:instagram'} className={'fs-4 text-light'}/>
                                        Instagram
                                    </a>
                                </li>
                                <li className={'nav-item'}>
                                    <a href="#" className={'nav-link'}>
                                        <Icon icon={'mdi:linkedin'} className={'fs-4 text-light'}/>
                                        LinkedIn
                                    </a>
                                </li>
                                <li className={'nav-item'}>
                                    <a href="#" className={'nav-link'}>
                                        <Icon icon={'mdi:twitter'} className={'fs-4 text-light'}/>
                                        Twitter
                                    </a>
                                </li>
                                <li className={'nav-item'}>
                                    <a href="#" className={'nav-link'}>
                                        <Icon icon={'mdi:youtube'} className={'fs-4 text-light'}/>
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 text-center text-lg-start mb-3 mb-lg-0">
                                <div className={'text-light small'}>Copyright © 2025 Target AFPI Book</div>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end">
                                <div className={'text-light small'}>Powered & Designed By: <a href="https://www.truewebpro.com/">Truewebpro</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={'position-fixed text-center'} style={{bottom:'20px',left:'20px'}}>
                <a className={'text-success'} href="https://api.whatsapp.com/send/?phone=919041536379&text=Hi%2C+need+more+information+about+%2ATarget+Afpi+Book%2A.+Please+contact+me">
                    <Icon className={'display-3'} icon={'logos:whatsapp-icon'}/>
                    <span className={'d-none'}>Whatsapp</span>
                </a>
            </div>
        </>
    )
}