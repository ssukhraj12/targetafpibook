import {Icon} from "@iconify/react";

export default function MainFooter() {
    return (
        <>
            <section id={'footer'} className={'pt-4 pb-3'}>
                <div className="container">
                    <div className="row py-5">
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
                        <div className="col-md-4 col-lg-3 mb-4 mb-lg-0">
                            <h4 className={'fw-bold'}>Our Contacts</h4>
                            <ul className={'list-unstyled'}>
                                <li className={'d-flex'}>
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
                                <li className={'d-flex'}>
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
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
                            <h4 className={'fw-bold'}>Links</h4>
                            <ul className={'list-unstyled'}>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Gallery</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2 mb-4 mb-md-0">
                            <h4 className={'fw-bold'}>About</h4>
                            <ul className={'list-unstyled'}>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4 col-lg-2">
                            <h4 className={'fw-bold'}>Follow Us</h4>
                            <ul className={'list-unstyled'}>
                                <li>
                                    <a href="#">
                                    <Icon icon={'mdi:facebook'} className={'fs-4 text-light'}/>
                                    Facebook
                                </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon icon={'mdi:instagram'} className={'fs-4 text-light'}/>
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon icon={'mdi:linkedin'} className={'fs-4 text-light'}/>
                                        LinkedIn
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Icon icon={'mdi:twitter'} className={'fs-4 text-light'}/>
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
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
                                <div className={'text-light small'}>Powered & Designed By: Sukh Raj Singh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}