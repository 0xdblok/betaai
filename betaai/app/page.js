import Image from "next/image";
import logoss from "./logoss.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/experiment-bg.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
    <div className="min-h-screen relative">
    {/* Background div with overlay */}
    <div className="fixed inset-0 z-0">
      <div className="d  border-8 rounded border-white ">
      <Image
        src="" // Replace with your background image path
        alt="Cyberpunk background"
        fill
        className="object-cover  "
        priority
      /></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/90" />
    </div>

    {/* Content container */}
    <div className="relative z-10 container mx-auto px-12">
      <div className="flex items-center justify-center "> 
        <Image src={logoss} alt="Logo" width={100} height={100} />
     </div> <h1 className="text-4xl pt-8   font-mono font-bold text-center justify-center flex text-white mb-8">
         BetaAI
        </h1>
      <div className="flex flex-col items-center justify-center pt-8">
        

        {/* Text content with better responsive layout */}
        <div className="w-full md:w-2/3 lg:w-1/2 text-white space-y-4 bg-white/20 p-6 rounded-lg backdrop-blur-sm">


          <div className="space-y-4">
            <p className="font-mono">
            Hey anon, I'm BetaAI - your favorite AI that decided black is the new blockchain. While other AIs are busy trying to solve the trilemma, I'm solving the real problem: why does tech have to look so... techy?
            </p>

            <p className="font-mono ">
            FEATURES:


              
           <p> Runs on pure sass and style</p>  
             <p> Bugs? No, those are "aesthetic glitches"</p>
           <p>More attitude than your average neural network)</p>  
            </p>
            <p>Processing power measured in coolness per second</p>
            <p className="font-mono pt-4 break-words">CA : <a></a></p>


            {/* Continue with the rest of your content... */}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">  
         <a href="https://x.com/experiment_0000" className=" text-white text-4xl"><svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.9708 16.1875C48.3552 16.9031 46.6177 17.3802 44.7844 17.6062C46.6479 16.5 48.0823 14.7354 48.7552 12.65C47.0115 13.6719 45.0792 14.4229 43.024 14.8188C41.3823 13.0792 39.0406 12 36.4469 12C31.4646 12 27.425 16.0031 27.425 20.9396C27.425 21.6385 27.5073 22.3188 27.6604 22.9792C20.1646 22.6031 13.5156 19.0396 9.06771 13.6312C8.28646 14.9531 7.84687 16.5 7.84687 18.1333C7.84687 21.2365 9.43542 23.9687 11.8583 25.5781C10.3792 25.5333 8.9875 25.1219 7.76875 24.4615C7.76875 24.4885 7.76875 24.5281 7.76875 24.5667C7.76875 28.9031 10.8792 32.5146 15.0021 33.3365C14.249 33.5427 13.4521 33.6573 12.6312 33.6573C12.049 33.6573 11.4813 33.5917 10.9313 33.4927C12.0792 37.0365 15.4094 39.6271 19.3552 39.7042C16.2677 42.0979 12.3792 43.5312 8.15104 43.5312C7.42083 43.5312 6.70625 43.4896 6 43.4042C9.99687 45.9344 14.7396 47.4167 19.8312 47.4167C36.4219 47.4167 45.499 33.7927 45.499 21.9729C45.499 21.5854 45.4865 21.2 45.4687 20.8187C47.2396 19.5677 48.7656 17.9906 49.9708 16.1875Z" fill="url(#paint0_linear_409_10)"/>
<defs>
<linearGradient id="paint0_linear_409_10" x1="12.7167" y1="13.3667" x2="44.4427" y2="45.0927" gradientUnits="userSpaceOnUse">
<stop stop-color="#2AA4F4"/>
<stop offset="1" stop-color="#007AD9"/>
</linearGradient>
</defs>
</svg>
</a>
      <a href="https://t.me/experiment01sai" className=" text-white text-4xl"><svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 4.16663C19.4747 4.16663 14.1756 6.36156 10.2686 10.2686C6.36162 14.1756 4.16669 19.4746 4.16669 25C4.16669 30.5253 6.36162 35.8243 10.2686 39.7313C14.1756 43.6384 19.4747 45.8333 25 45.8333C30.5254 45.8333 35.8244 43.6384 39.7314 39.7313C43.6384 35.8243 45.8334 30.5253 45.8334 25C45.8334 19.4746 43.6384 14.1756 39.7314 10.2686C35.8244 6.36156 30.5254 4.16663 25 4.16663Z" fill="#29B6F6"/>
<path d="M35.3646 15.625L31.4625 35.548C31.4625 35.548 31.2948 36.4584 30.1656 36.4584C29.5656 36.4584 29.2563 36.173 29.2563 36.173L20.8042 29.1594L16.6688 27.075L11.3615 25.6636C11.3615 25.6636 10.4167 25.3907 10.4167 24.6094C10.4167 23.9584 11.3886 23.648 11.3886 23.648L33.5927 14.8271C33.5927 14.8271 34.2709 14.5823 34.7656 14.5834C35.0698 14.5834 35.4167 14.7136 35.4167 15.1042C35.4167 15.3646 35.3646 15.625 35.3646 15.625Z" fill="white"/>
<path d="M23.9583 31.7761L20.3896 35.2907C20.3896 35.2907 20.2344 35.4105 20.0271 35.4157C19.9552 35.4178 19.8781 35.4063 19.799 35.3709L20.8031 29.1573L23.9583 31.7761Z" fill="#B0BEC5"/>
<path d="M31.1427 18.9542C30.9667 18.725 30.6417 18.6833 30.4125 18.8573L16.6667 27.0833C16.6667 27.0833 18.8604 33.2208 19.1948 34.2833C19.5302 35.3469 19.799 35.3719 19.799 35.3719L20.8031 29.1583L31.0448 19.6833C31.274 19.5094 31.3167 19.1833 31.1427 18.9542Z" fill="#CFD8DC"/>
</svg>
</a>
      </div>

      
<div className="flex justify-center  pt-4"> <a href="https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0xa30d1d5b23809f723ba2bb9376b050f6313981a5&value=0.026383404192031892&field=input" className="inline-flex  bg-white hover:bg-[#F8B565] hover:focus e items-center px-6 py-3 font-medium text-black backdrop-blur-sm  rounded-lg transition-colors ">
          Buy on Uniswap
        </a></div>
     
<p className=" text-leading font-thin  text-center text-white pb-4 pt-20">All rights reserve BetaAI 2024</p>

      {/* Button with improved positioning */}
  
      
    </div>
  </div>
  </div>
  );
}
