import Image from "next/image";
import Link from "next/link";
import Logo from "../Logo/Logo";
import { FaArrowRightLong } from "react-icons/fa6";
import { SanityDocument } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";

interface PostLayoutBasicProps {
    data: any;
    postSizeMd?: boolean;
    postBgDark?: boolean;
}

const PostLayoutThirteen = ({data, postSizeMd, postBgDark} : PostLayoutBasicProps) => {

  return (
    <>
      <div className={`media post-block m-b-xs-80 ${postSizeMd === true ? "post-block__mid" : ""} ${postBgDark === true ? "post-block__on-dark-bg": "" }`}>
         
            <Link href={`/`}>
                <span className="align-self-center border border-5 rounded shadow-lg p-3 mb-5 border-primary">
                <Image
                src={urlForImage(data.mainImage)}
                alt={data.mainImage.alt}
                width={postSizeMd === true ? 285 : 150}
                height={postSizeMd === true ? 285 : 150}
                placeholder="blur"
                blurDataURL="/images/placeholder.png"
                className="shadow-lg p-3 mb-5"
                />
                </span>
            </Link>
            
         <div className="media-body m-5">
           <div className="post-cat-group m-b-xs-10">
            <Link href={`/`}>
                <span className={`post-cat cat-btn ${data.cate_bg ?? "bg-color-blue-one"}`}>{""}</span>
            </Link>
           </div>
           <h3 className="axil-post-title hover-line hover-line" style={{color:"black"}}>
                <Link href={`/`}>
                    Beard Care
                </Link>
            </h3>
          <div className="post-metas">
             <ul className="list-inline">
               <li>
                    <span>By {data?.node?.author?.node?.name}</span> 
               </li>
             </ul>
           </div>
         </div>
         
		</div>
    <div className="progress m-5 m-b-xs-80" style={{width: "170% !important",height: "2px"}}>
        <div className="progress-bar bg-color-blue-one" role="progressbar" style={{width: "70%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}></div>
      </div>
    </>
  );
};

export default PostLayoutThirteen;