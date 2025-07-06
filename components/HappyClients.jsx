import ElfsightWidget from "@/components/ElfsightWidget";

export default function HappyClients() {
    return (
        <>
            <section id='happy-clients' className={'bgred position-relative py-3'}>
                <div className="shape-divider shape-divider-top"></div>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-center">
                            <h2 className={'fw-bold text-white'}>Our Happy Clients</h2>
                            <p className={'text-light opacity-75'}>Mohali Defence Academy boasts a team of highly experienced professionals dedicated to providing result-oriented courses </p>
                        </div>
                        <div className="col-lg-8">
                            <div className={'mb-5'}>
                                <ElfsightWidget/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-divider shape-divider-bottom"></div>
            </section>
        </>
    )
}