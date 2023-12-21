import Image from "next/image";
import Logo from "../Logo/Logo";
import { FaArrowRightLong } from "react-icons/fa6";


interface PostLayoutThirteenProps {
    image: string;
    text : string;
}

const PostLayoutThirteen = ({ image, text } : PostLayoutThirteenProps) => {

  return (
    <>
    
        <div className="align-self-center border border-custom-green rounded-3xl shadow-2xl	bg-white px-4 pt-8 transform transition-transform duration-200 hover:scale-105">
            <div className="border border-custom-green rounded-3xl">
                <Image
                    src={image}
                    alt={'Sample Image - Alpha Grooming'}
                    width={350}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    className="rounded-3xl "
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="block">
                    <h3 className="mt-8 text-3xl">{text}</h3>
                </div>      
                <div className="flex items-center mt-[-20px]">
                        <h4 className="text-custom-green text-2xl px-2">Read Full Article</h4>
                        <FaArrowRightLong className="text-2xl text-custom-green thin-arrow mt-[-20px]" />
                </div>
                <Image
                src={'/alpha-grooming-bg-clear.png'}
                alt="Alpha Grooming logo"
                height="20"
                width="50"
                className="h-20 tablet:h-[100px] object-contain object-right ml-auto mt-[-30px] transform hover:scale-110 hover:-translate-x-1 hover:translate-x-1 transition-transform duration-200"
                />
            </div>
        </div>
   
    </>
  );
};

export default PostLayoutThirteen;
