import Image from "next/image";

export default function LearnPrepare() {
    return (
        <>
            <section id={'learnprepare'} className={'py-5 bg-light'}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <h2 className={'h6 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                                Mohali Defence Academy</h2>
                            <h3 className={'h3 cred fw-bold'}>Learn - Prepare - Succeed</h3>
                            <p className={'mb-5 text-muted'}>
                                Mohali Defence Academy has been providing top-tier online and offline coaching classes for years, preparing aspirants for the Maharaja Ranjit Singh Armed Forces Preparatory Institute (MRSA) Entrance Exam, the Mai Bhago Armed Forces Preparatory Institute (MBAFPI) Entrance Exam, the National Defence Academy (NDA) Entrance Exam, the Services Selection Board (SSB) Interview, the Combined Defence Services (CDS) Examination, the Air Force Common Admission Test (AFCAT), the Joint Entrance Examination (JEE) Main.                            </p>
                            <a href="#" className={'fw-bold text-decoration-none rounded-1 text-uppercase bgred text-white px-5 py-3'}>Read More</a>
                        </div>
                        <div className="col-lg-6 offset-lg-1">
                            <Image src={'/images/targetafpi_book_2.png'} alt={'Target AFPI Book'} width={707} height={1000}
                                   className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}