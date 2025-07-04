import Image from "next/image";
export default function BlogGrid() {
    const hblogs = [
        {blog_id:1,blog_image:'/images/blog_1.png',title:'Our Selection Excellence At Maharaja Ranjit Singh Academy, Mohali'},
        {blog_id:2,blog_image:'/images/blog_2.png',title:'Shaurya Batch'},
        {blog_id:3,blog_image:'/images/blog_3.png',title:'Offline/ Online Coaching Classes'},
    ];
    return (
        <>
            <section id={'blog-grid'} className={'pt-3 pb-5 bg-light position-relative'}>
                <div className="container">
                    <div className="row align-items-end gy-3">
                        <div className="col-lg-9">
                            <h2 className={'h6 cred fw-semibold'}>
                                <span className={'text-decoration-underline cred d-inline-flex bgred me-2'}
                                      style={{width:'50px',height:'2px',margin:"0 0 4px 10px"}}></span>
                                Our Blog</h2>
                            <h3 className={'h1 cred fw-bold'}>News & Articles</h3>
                            <p className={'small text-muted mb-0'}>Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses...</p>
                        </div>
                        <div className="col-lg-3">
                            <div className={'d-flex'}>
                                <a  className={'fw-bold text-decoration-none rounded-1 text-uppercase bgred text-white px-5 py-3'} href="#">View More</a>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2 gy-4">
                        {hblogs.map((blog, index) => (
                            <div key={index} className={'col-lg-4'}>
                                <div className="card shadow-lg" title={blog.title}>
                                    <Image src={blog.blog_image} alt={blog.title} height={'280'} width={'420'} quality={70}
                                           className={'card-img-top'} style={{width:'100%',aspectRatio:'42/28',objectFit:'fill',height:'auto'}} />
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
            </section>
        </>
    )
}