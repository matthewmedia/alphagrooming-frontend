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
    
        <div className="align-self-center border-2 border-custom-green rounded-lg shadow-lg p-14 mb-5 bg-white">
            <div className="border-2 border-custom-green rounded-lg">
                <Image
                    src={image}
                    alt={'Sample Image - Alpha Grooming'}
                    width={350}
                    height={300}
                    placeholder="blur"
                    blurDataURL="/images/placeholder.png"
                    className="rounded-lg"
                />
            </div>
            <div className="flex items-center space-x-8">
                <h3 className="mt-8 text-3xl">{text}</h3>      
            </div>
            <div className="flex items-center space-x-2">
                <h4 className="text-custom-green text-2xl">Read Full Article</h4>
                <FaArrowRightLong className="text-4xl text-custom-green mt-[-15px]" /> 
            </div>
            <div className="flex justify-end">
                <Logo /> 
            </div>
        </div>
   
    </>
  );
};

export default PostLayoutThirteen;
