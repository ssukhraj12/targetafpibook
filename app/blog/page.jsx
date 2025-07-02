import Image from "next/image";
import CallbackForm from "@/components/CallbackForm";

export const metadata = {
    title: 'Blog | Target AFPI Book',
    description:'Blog | Target AFPI Book',
    siteTitle: 'Target AFPI Books',
    alternates:{
        canonical:'/blog'
    }
}
export default function BlogsPage(){
    const hblogs = [
        {blog_id:1,blog_image:'/images/blog_1.png',title:'Our Selection Excellence At Maharaja Ranjit Singh Academy, Mohali'},
        {blog_id:2,blog_image:'/images/blog_2.png',title:'Shaurya Batch'},
        {blog_id:3,blog_image:'/images/blog_3.png',title:'Offline/ Online Coaching Classes'},
        {blog_id:4,blog_image:'/images/blog_4.png',title:'Target Afpi Book'},
        {blog_id:5,blog_image:'/images/blog_5.png',title:'Target Afpi Book'},
        {blog_id:6,blog_image:'/images/blog_6.png',title:'What Makes Us Best "AFPI Mohali" Entrance Exam Coaching?'},
        {blog_id:7,blog_image:'/images/blog_7.png',title:'TES 10+2 Entry Scheme'},
        {blog_id:8,blog_image:'/images/blog_8.png',title:'A Preparatory Defence Academy'},
    ];
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className="main bgred py-4">
                    <div className="container">
                        <h1 className={'text-white fw-bold text-center mb-0'}>Blog</h1>
                    </div>
                </div>
                <div className="container pt-4 mt-4">
                    <div className="row gy-4">
                        <div className="col-12 col-lg-8">
                            <div className="row gy-5">
                                {hblogs.map((blog, index) => (
                                    <div key={index} className={'col-lg-12'} data-aos={'fade-down'}>
                                        <div className="card shadow" title={blog.title}>
                                            <Image src={blog.blog_image} alt={blog.title} height={'280'} width={'420'} quality={70}
                                                   className={'card-img-top'} style={{width:'100%',aspectRatio:'41/23',objectFit:'fill',height:'auto'}} />
                                            <div className={'card-body'}>
                                                <div className={'small mb-2 text-muted'}>
                                                    <span>24th May, 2025</span>
                                                    <span className={'ms-3'}>By: Prabhjot Sir</span>
                                                </div>
                                                <h2 className={'h5 text-truncate fw-bold'}>{blog.title}</h2>
                                                <a href="#" className={'cred fw-semibold text-uppercase text-decoration-none small'} title={blog.title}>Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <h2 className={'h3 fw-bold'}>News & Articles</h2>
                            <p>Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses ...</p>
                            <CallbackForm/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}