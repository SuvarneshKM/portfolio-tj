import Image from 'next/image';
import MouseFillIcon from 'remixicon-react/MouseFillIcon';

function Banner() {
    return (
        <div className="relative py-32 sm:py-40 md:py-48 lg:py-52 xl:py-60 2xl:py-60 max-w-7xl mx-auto px-8 sm:px-16 text-left lg:text-center text-dark bg-light ">
            <div className="relative h-32">
                <Image
                    src="/Avatar/main-avatar.png"
                    layout='fill'
                    objectFit='contain'
                    className="cursor-pointer object-left lg:object-center"
                />
            </div>
            <p className="text-xl pt-5 pb-4">Hello, I'm Akhil T J.</p>
            <h1 className="text-6xl font-bold">Gravida enim et eget suscipit commodo leo, laoreet arcu</h1>
            <p className="text-xl pt-5"><span className="text-accent">Vestibulum</span>, <span className="text-accent">sapien</span>, <span className="text-accent">aliquam</span> volutpat vitae turpis massa donec sed nunc. Nunc sed <span className="text-accent">massavelit</span> donec.</p>
            <div className="hidden lg:inline-flex pt-24">
                <MouseFillIcon className="text-accent" />
            </div>
        </div>
    )
}

export default Banner
