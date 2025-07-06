"use client";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Icon} from "@iconify/react";

export default function MainHeader() {
    const pathname = usePathname();
    const menus = [
        {id:1,name:"Home",link:"/"},
        {id:2,name:"About",link:"/about"},
        {id:4,name:"Our Courses",link:"/our-courses/national-defence-academy-nda"},
        {id:5,name:"Gallery",link:"/gallery"},
        {id:6,name:"Blog",link:"/blog"},
    ]
    return (
        <>
            <section id={'ftop'} className={'fixed-top'}>
                <div className="topbar text-bg-light py-1 border-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="marquee-wrapper">
                                    <div className="marquee-content">
                                        <a href="#" className={'btn btn-outline-dark btn-sm'}>Order Now!</a> Target Afpi Book for Maharaja Ranjit Singh Academy AFPI Mohali Entrance Exam Preparation
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={'navbar navbar-expand-lg navbar-light bg-light-subtle shadow-sm py-0 py-lg-0'}>
                    <div className="container">
                        <Link href={'/'} className={'navbar-brand me-0'}>
                            <Image src={'/logo.png'} alt={'logo'} width={80} height={56.63} sizes={'100vw'}
                                   className={'img-fluid d-lg-none'} priority={true} />
                            <Image src={'/logo.png'} alt={'logo'} width={132} height={94} sizes={'100vw'}
                                   className={'img-fluid d-none d-lg-block'} priority={true} />
                        </Link>
                        <button className="navbar-toggler order-1" type="button" data-bs-toggle="collapse"
                                data-bs-target="#mainMenu" aria-controls="mainMenu"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="mainMenu">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-semibold">
                                {menus.map((menu,index) => (
                                    <li className="nav-item me-3" key={index}>
                                        <Link href={menu.link}
                                              className={`nav-link ${pathname === menu.link ? 'active' : ''}`}>
                                            {menu.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className={'d-flex align-items-center order-0'}>
                            <div className="menucall icon-link rounded-circle bgred d-none d-sm-inline-flex">
                                <Icon icon={'mdi:phone-outline'} className={'fs-4 fw-bold'}/>
                            </div>
                            <div className={'ms-2'}>
                                <div className={'small lh-1 text-uppercase fw-semibold text-muted'}>Call Us Now</div>
                                <a href={'tel:+919041536379'}
                                   className={'lh-1 fs-5 text-decoration-none fw-bold cred'}>
                                    904-153-6379
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </>
    )
}