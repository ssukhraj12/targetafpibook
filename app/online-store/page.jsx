import Image from "next/image";
import ProductReviewWidget from "@/components/ProductReviewWidget";
import CallbackForm from "@/components/CallbackForm";

export const metadata = {
    title:"Buy Online Store",
}
export default function OnlineStorePage() {
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className="main bgred py-4">
                    <div className="container">
                        <h1 className={'text-white fw-bold text-center mb-0'}>Online Store</h1>
                    </div>
                </div>
                <section className={'pt-4'}>
                    <div className="container">
                        <div className="row g-3 g-md-4">
                            <div className="col-12 col-md-6">
                                <Image src={'/images/targetafpi_book_1.png'} quality={70}
                                       alt={'Target AFPI Book'} width={614} height={869}
                                       sizes={'50vw'} className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="row align-items-center">
                                    <div className="col-12 col-md-7">
                                        <h2 className={'fw-bold cred'}>Target AFPI Book</h2>
                                        <h3>
                                            <span>₹ <span className={'fw-bold cred'}>499</span> </span>
                                            <del className={'small ms-2 text-muted'}>₹ <span>1499</span></del>
                                            <span className={'ms-3 small badge bg-danger'}>Save 66%</span>
                                        </h3>
                                    </div>
                                    <div className={'col-12 col-md-5'}>
                                        <ProductReviewWidget/>
                                    </div>
                                </div>
                                <p>
                                    Target AFPI Book for Maharaja Ranjit Singh Academy Entrance Exam
                                </p>
                                <p>
                                    Mohali Defence Academy boasts a team of highly experienced professionals. Team is dedicated to providing result-oriented courses for aspirants
                                </p>
                                <div className="row align-items-end">
                                    <div className="col-6 col-md-3">
                                        <label htmlFor="qty">Quantity</label>
                                        <input type="number" className={'form-control'} id={'qty'} name={'qty'} min={1}/>
                                    </div>
                                    <div className="col-6 col-md-6">
                                        <button className={'btn btn-danger fw-bold w-100'}>Buy Now</button>
                                    </div>
                                    <div className="col-6 col-md-3"></div>
                                </div>
                                <div className={'mt-4'}>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <Image src={'/images/payments1.png'} quality={70} alt={'Target AFPI Book'} width={414} height={142}
                                                   className="img-fluid" sizes={'100vw'} />
                                        </div>
                                    </div>
                                </div>
                                <div className={'mt-4'}>
                                   <CallbackForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}