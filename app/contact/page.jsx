import ContactForm2 from "@/components/ContactForm2";

export default function ContactPage(){
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className="main bgred py-4">
                    <div className="container">
                        <h1 className={'text-white fw-bold text-center mb-0'}>Contact</h1>
                    </div>
                </div>
                <div className={'container'}>
                    <div className="row pt-5 g-3 g-md-4">
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className={'fw-bold cred'}>Get In Touch</h2>
                                    <div>
                                        <h3 className={'h6 cred fw-bold'}>Work Inquiries</h3>
                                        <a className={'nav-link mb-4'} href="tel:+919041536379">904-153-6379</a>
                                    </div>
                                    <div>
                                        <h3 className={'h6 cred fw-bold'}>WhatsApp Number</h3>
                                        <a className={'nav-link mb-4'} target={'_blank'} href="https://api.whatsapp.com/send/?phone=919041536379&text=Hi+need+more+information+about+Target+Afpi+Book+Please+contact+me.">904-153-6379</a>
                                    </div>
                                    <div>
                                        <h3 className={'h6 cred fw-bold'}>Assistance Hours</h3>
                                        <p className={'nav-link'}>Mon - Sat 9:30AM to 6:30PM</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2 className={'fw-bold cred'}>Post Address & Mail</h2>
                                    <div>
                                        <h3 className={'h6 cred fw-bold'}>Address</h3>
                                        <p className={'mb-4'}>Near Forest Complex, Sector 68, Kumbra, Sahibzada Ajit Singh Nagar<br/>Mohali,
                                            160055<br/>Punjab, IN</p>
                                    </div>
                                    <div>
                                        <h3 className={'h6 cred fw-bold'}>Email</h3>
                                        <a className={'nav-link'} href="mailto:targetafpibook@gmail.com">targetafpibook@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <iframe className={'shadow'} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8973.817623559293!2d76.71879318702659!3d30.690653515725224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef54cb3b4c39%3A0xf202dd09cc8f0295!2sMohali%20Defence%20Academy!5e1!3m2!1sen!2sin!4v1751457105704!5m2!1sen!2sin"
                                width="100%" height="350" allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div className="container bg-white mt-4 py-4 shadow">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className={'h5 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                                Get In Touch</h2>
                            <h3 className={'h1 cred fw-bold'}>Send Us a Message</h3>
                            <ContactForm2/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}