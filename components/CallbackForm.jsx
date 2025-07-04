export default function CallbackForm() {
    return (
        <>
            <div className="card shadow bshadow1 border-0 rounded-3">
                <div className="card-body p-5">
                    <h2 className={'fw-bold cred lh-1 mb-1'}>Request a Callback</h2>
                    <p className={'pb-1 mb-4'}>Enter your details in the form and we will call you back.</p>
                    <form className={'custom-form-style-1'}>
                        <div className="row">
                            <div className="col-12 pb-1 mb-4">
                                <input type="text" className={'form-control'} placeholder={'Your Name'}/>
                            </div>
                            <div className="col-12 pb-1 mb-4">
                                <input type="number" className={'form-control'} placeholder={'Your Mobile Number'}/>
                            </div>
                            <div className="col-12 pb-1 mb-4">
                                <input type="email" className={'form-control'} placeholder={'Your Email Address'}/>
                            </div>
                            <div className="col-12">
                                <button type="button" className={'bgred px-5 py-2 rounded-1 border-0 text-uppercase fw-bold text-white'}>Call Me Back</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}