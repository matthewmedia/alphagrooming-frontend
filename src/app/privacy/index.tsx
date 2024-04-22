
import {useRouter} from "next/router"
import Link from "next/link"

const PrivacyPolicy = () => {

  const router = useRouter()
  return (
    <>
            <div className="bg-grey-light-three mt-5 mb-5">
                <div className="container">
                    <div className="">

                            <Link href="/">
                                <a className="btn btn-primary">BACK TO HOMEPAGE</a>
                            </Link>
                       
                    </div>
                </div>
            </div>
        </>
  );
};


export default PrivacyPolicy;