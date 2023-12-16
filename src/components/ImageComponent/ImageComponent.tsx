

import Image from "next/image";

const ImageComponent= () => (
    <div className='flex items-center justify-center z-10 max-w-5xl w-full font-mono text-sm relative'>
        <div className="image-border-gradient shadow-lg hidden sm:block"></div>    
        <Image
                src={'/gigachad.png'}
                alt="fileforms logo"
                className={'h-100 tablet:h-[100px] sm:h-[80px] md:h-[100px]  lg:h-[600px] object-contain object-center  relative z-10 transform hover:scale-110 transition-transform duration-200'}
                width={600}
                height={600}
            />
    </div>
  );

export default ImageComponent;