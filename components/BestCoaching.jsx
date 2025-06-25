import Image from "next/image";

export default function BestCoaching() {
    return (
        <>
            <section id={'bestcoaching'} className={'py-3'}>
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 offset-lg-1 order-0 order-lg-1">
                            <h2 className={'h6 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                                Empower - Transform - Succeed</h2>
                            <h3 className={'h3 cred fw-bold'}>Best Coaching Academy For NDA Exam In Mohali/ Chandigarh</h3>
                            <p className={'mb-5 text-muted'}>
                                Choosing the right career path immediately after 10+2 is crucial for students, and one of the most prestigious options is the National Defence Academy (NDA). Graduating from NDA opens the door to an officer-level government job in the Indian Defence Services—offering a career full of learning, discipline, and adventure. To help students achieve this dream, Mohali Defence Academy provides expert guidance and training, playing a vital role in turning NDA aspirations into reality.
                            </p>
                            <a href="#" className={'fw-bold text-decoration-none rounded-1 text-uppercase bgred text-white px-5 py-3'}>Read More</a>
                        </div>
                        <div className="col-lg-5 order-1 order-lg-0">
                            <Image src={'/images/targetafpi_book_3.png'} alt={'Target AFPI Book'} width={707} height={1000}
                                   className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}