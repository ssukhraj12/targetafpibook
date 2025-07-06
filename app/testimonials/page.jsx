import HappyClients from "@/components/HappyClients";

export default function TestimonialPage(){
    return (
        <>
            <section className={'bg-light pb-4'}>
                <div className="main bgred py-4">
                    <div className="container">
                        <h1 className={'text-white fw-bold text-center mb-0'}>Testimonials</h1>
                    </div>
                </div>
                <HappyClients/>
            </section>
        </>
    )
}