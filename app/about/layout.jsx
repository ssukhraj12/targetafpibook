import Link from "next/link";
export const metadata = {
    title: "About | Target AFPI Book",
}
export default function AboutLayout({children}) {
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className={'bgred py-4'}>
                    <div className="container">
                        <h1 className={'fw-bold cred text-center text-white mb-0'}>About</h1>
                    </div>
                </div>
                <div className="container">
                    <ul className={'nav nav-underline nav-pills justify-content-center fw-semibold'}>
                        <li className={'nav-item'}>
                            <Link href={'/about/councelling'} className={'nav-link'}>Councelling</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/about/procedure'} className={'nav-link'}>Procedure</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/about/prospectus'} className={'nav-link'}>Prospectus</Link>
                        </li>
                        <li className={'nav-item'}>
                            <Link href={'/about/mission-and-vision'} className={'nav-link'}>Mission and Vision</Link>
                        </li>
                    </ul>
                </div>
                <div className="container">
                    <h2 className={'h5 fw-bold'}>Our goal is to offer the best coaching for both written exams and interviews under expert guidance at MDA. We provide students with</h2>
                    <ol>
                        <li><div className={'fw-semibold'}>Comprehensive study materials</div></li>
                        <li><div className={'fw-semibold'}>Classroom sessions covering all subjects</div></li>
                        <li><div className={'fw-semibold'}>Offline and online live classes</div></li>
                        <li><div className={'fw-semibold'}>Recorded lectures for flexible learning</div></li>
                        <li><div className={'fw-semibold'}>Dedicated doubt-clearing sessions</div></li>
                        <li><div className={'fw-semibold'}>Practice with guess papers</div></li>
                        <li><div className={'fw-semibold'}>Interview preparation classes</div></li>
                        <li><div className={'fw-semibold'}>Group discussions</div></li>
                        <li><div className={'fw-semibold'}>Motivational lectures</div></li>
                    </ol>
                    {children}
                    <p>
                        Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses for aspirants preparing for entrance exams and interviews for the National Defence Academy (NDA), Combined Defence Services (CDS), and Air Force Common Admission Test (AFCAT), Maharaja Ranjit Singh Academy's Entrance Exam (AFPI Mohali), Mai Bhago Armed Forces Preparatory Institute (MBAFPI) and IIT Mains.
                    </p>
                    <p>
                        If your ambition is to join the armed forces and earn the honour of wearing stars on your shoulders, Mohali Defence Academy is the place to be joined to. More than just preparing candidates for selection, we focus on developing officer-like qualities such as leadership, adaptability, and trainability, ensuring success both in the exams and in a future military career.
                    </p>
                    <h5>Faculty</h5>
                    <p>
                        The academy’s team includes interviewing officers, psychologists, a warden, accountants, a head clerk, a librarian, a drill instructor, a physical training instructor, Yoga trainner and experienced subject teachers.
                    </p>
                    <h5>Motto</h5>
                    <p>Learn - Prepare - Succeed</p>
                </div>
            </section>
        </>
    )
}