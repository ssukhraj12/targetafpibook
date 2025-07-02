import {Icon} from "@iconify/react";
import CallbackForm from "@/components/CallbackForm";

export default function CallSection() {
    const facts = [
        {id:1,title:'Latest Edition',icon:'streamline-ultimate-color:book-open-bookmark'},
        {id:2,title:'Short Cut Concepts',icon:'ic:twotone-switch-access-shortcut-add'},
        {id:3,title:'1400+ MCQs',icon:'line-md:check-list-3'},
        {id:4,title:'Informative Material',icon:'rivet-icons:check-circle-breakout'},
    ]
    return (
        <>
            <section className={'position-relative'}>
                <section id='call-section' className={'pt-5 pb-3 position-relative'}>
                    <div className="container">
                        <div className="row justify-content-center justify-content-lg-start pb-5 mb-5">
                            <div className="col-md-10 col-lg-6 text-center text-lg-end pe-lg-4 pb-5 mb-5">
                                <h1 className={'text-white'}>Order Now : Target AFPI Book</h1>
                                <p className={'custom-font-secondary text-light opacity-75 fs-5 text-color-light opacity-6 mb-4'}>Written By Prabhjot Sir </p>
                                <div className={'shape-divider spacer'}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container position-relative z-1" style={{marginTop:"-395px"}}>
                    <div className="row align-items-end pb-4 mb-4 mb-lg-5">
                        <div className={'col-lg-6 pe-lg-4 mb-5 mb-lg-0'}>
                            <CallbackForm/>
                        </div>
                        <div className={'col-lg-6 pb-lg-5'} data-aos={'fade-down'} data-aos-delay={300}>
                            <ul className="list list-unstyled mb-0">
                                <li className="mb-4 mb-lg-2">
                                    <span className="d-flex align-items-center justify-content-end justify-content-lg-end flex-column flex-xl-row fw-medium fs-5">
                                        <span className={'opacity-50'}> SCHEDULE AN APPOINTMENT:</span>
                                        <strong className="fs-3 mt-lg-0 ms-lg-3">
                                            <a href="tel:+919041536379" className="cred text-decoration-none">904-153-6379</a>
                                        </strong>
                                    </span>
                                </li>
                                <li className="mb-0">
                                    <span className="d-flex align-items-center justify-content-end justify-content-lg-end flex-column flex-xl-row fw-medium fs-5">
                                       <span className={'opacity-50'}>SEND AN EMAIL:</span>
                                        <strong className="mt-lg-0 ms-lg-3">
                                            <a href="mailto:targetafpibook@gmail.com" className="cred">targetafpibook@gmail.com</a>
                                        </strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-4 text-center">
                        {facts.map((fact, index) => (
                            <div key={index} className={'col-6 col-xl-3 d-flex flex-column flex-xl-row align-items-center justify-content-center'}
                                 data-aos={'fade-down-right'}>
                                <Icon icon={`${fact.icon}`} className={'fs-1 me-2'}/>
                                <h3 className={'h6 fw-bold mb-0 ps-1 ms-xl-2 mt-3 mt-xl-0'}>{fact.title}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </>
    )
}