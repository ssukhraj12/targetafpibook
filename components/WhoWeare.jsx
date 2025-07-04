import Image from "next/image";

export default function WhoWeare() {
    return (
        <>
            <section id={'whoweare'} className={'py-3 position-relative'}>
                <div className="container py-3">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <h2 className={'h6 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                                Written By : Director - MDA</h2>
                            <h3 className={'h1 cred fw-bold'}>Prabhjot Sir</h3>
                            <p className={'fs-5 mb-5 text-muted'}>
                                The content of the Target Afpi booklet is helpful for preparing aspirants for the Maharaja Ranjit Singh Academy's Entrance Exam, as it covers all the previous years' solved examinations from 2013 to the present year. The best part is that this is an error-free booklet with all the necessary shortcut tricks. "Prabhjot Sir, Director of Mohali Defence Academy, writes and updates this booklet every year."
                            </p>
                            <a href="#" className={'fw-bold text-decoration-none rounded-1 text-uppercase bgred text-white px-5 py-3'}>Read More</a>
                        </div>
                        <div className="col-lg-5 offset-lg-1 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s"
                             data-wow-duration="1s">
                            <Image src={'/images/targetafpi_book_1.png'} quality={70} alt={'Target AFPI Book'} width={707} height={1000}
                                   className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="shape-divider shape-divider-bottom"></div>
            </section>
        </>
    )
}