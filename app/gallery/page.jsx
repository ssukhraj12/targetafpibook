import Image from "next/image";

export default function GalleryPage(){
    return (
        <>
            <section className={'gallery-page bg-light'}>
                <div className="main bgred py-4">
                    <div className="container">
                        <h1 className={'text-white fw-bold text-center mb-0'}>Photo Gallery</h1>
                    </div>
                </div>
                <div className="container py-4">
                    <div className="row g-3 g-md-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div key={index} className="col">
                                <div className={'card shadow'}>
                                    <div className="card-body">
                                        <Image src={`/images/targetafpi_book_${index+1}.png`} alt={index+1}
                                               width={600} height={600}
                                               style={{ aspectRatio: '1/1',width: '100%', height: '100%',objectFit: 'cover' }} />
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