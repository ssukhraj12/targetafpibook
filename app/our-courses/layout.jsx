import Link from "next/link";

export default function OurCoursesLayout({children}) {
    const courses = [
        {id:1,title:'NATIONAL DEFENCE ACADEMY (NDA)',slug:'national-defence-academy-nda'},
        {id:1,title:'MAHARAJA RANJIT SINGH ACADEMY',slug:'maharaja-ranjit-singh-academy'},
        {id:1,title:'MAI BHAGO ACADEMY (MBAFPI)',slug:'mai-bhago-academy-mohali-mbafpi'},
        {id:1,title:'AIRFORCE COMMON ADMISSION TEST',slug:'airforce-common-admission-test'},
        {id:1,title:'COMBINED DEFENCE SERVICES (CDS)',slug:'combined-defence-services-cds'},
        {id:1,title:'SERVICE SELECTION BOARD (SSB)',slug:'service-selection-board-ssb'},
        {id:1,title:'TECHNICAL ENTRY SCHEME (TES, 10+2)',slug:'technical-entry-scheme-tes-10-2'},
    ]
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className={'bgred py-4'}>
                    <div className="container">
                        <h1 className={'fw-bold cred text-center text-white mb-0'}>Our Courses</h1>
                    </div>
                </div>
                <div className="container mt-2">
                    <ul className="nav row g-1 g-md-3 row-cols-2 row-cols-lg-4 justify-content-center">
                        {courses.map((course,index) => (
                            <div key={index} className="nav-item col">
                                <Link href={`/our-courses/${course.slug}`} className="nav-link p-0 card text-center">
                                    <div className="card-body p-1">
                                        <span className={'fw-semibold small'}>{course.title}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
               <div className="container pt-4">
                   <h2 className={'h5 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                       Get In Touch</h2>
                   {children}
               </div>
            </section>
        </>
    )
}