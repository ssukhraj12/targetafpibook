export default function ContactForm2() {
    return (
        <>
            <form className={'custom-form-style-1'}>
                <div className="row">
                    <div className="col-12 col-md-6 pb-1 mb-4">
                        <input type="text" className={'form-control'} placeholder={'Your Name'}/>
                    </div>
                    <div className="col-12 col-md-6 pb-1 mb-4">
                        <input type="number" className={'form-control'} placeholder={'Your Mobile Number'}/>
                    </div>
                    <div className="col-12 col-md-6 pb-1 mb-4">
                        <input type="email" className={'form-control'} placeholder={'Your Email Address'}/>
                    </div>
                    <div className="col-12 col-md-6 pb-1 mb-4">
                        <input type="text" className={'form-control'} placeholder={'Subject'}/>
                    </div>
                    <div className="col-12 col-md-12 pb-1 mb-4">
                        <textarea rows={5} className={'form-control'} placeholder={'Your Message'}/>
                    </div>
                    <div className="col-12">
                        <button type="button" className={'bgred px-5 py-2 rounded-1 border-0 text-uppercase fw-bold text-white'}>
                            Send Message
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}