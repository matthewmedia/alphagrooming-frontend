import Layout from "@/components/Layout/Layout";
import "../app/globals.css";
import Navigation from "@/components/Navigation/NavigationBar";

export default function Home() {
  return (
    <>
    <Navigation />
    <Layout style={{ backgroundImage: `url('/background.png')` }}>
      <div className="flex justify-center mt-[-50px]">
        <div className="max-w-4xl w-full flex items-center justify-center font-mono text-9xl text-center lg:flex leading-[13rem] flex-col">
            <div className="font-bold text-center text-black flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper align-middle hover:text-green-500 transition-colors duration-200" viewBox="0 0 16 16">
              <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z"/>
              <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z"/>
            </svg>
              <p className="mt-12">Original Articles</p>
            </div>
          <span className="text-black font-semibold">
            YOUR GUIDE <span className="mr-6">TO</span>
            <span style={{ color: '#14FE00', textShadow: '2px 2px #000' }} className="font-bold">GROOMING GREATNESS</span>
          </span>
        </div>
        <div className="flex min-h-screen flex-col items-end justify-center p-24">
          <div className="z-10 max-w-5xl w-full flex items-center justify-center font-mono text-sm lg:flex relative">
            <div className="image-border-gradient shadow-lg"></div>
            <img
              src={'/gigachad.png'}
              alt="fileforms logo"
              height="180" 
              className={'h-100 tablet:h-[100px] object-contain object-left relative z-10'}
            />
          </div>
        </div>
      </div>
    </Layout>
    </>
  )
}