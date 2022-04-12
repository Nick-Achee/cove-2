import Head from 'next/head'
import Link from "next/link"
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="relative z-30 bg-white-300 h-screen w-screen">
    <div className="flex justify-center items-center  h-screen">
    <div className="p-4">
    <Image src="/cove.png" alt="logo" width={600} height={200} />
    <div className="text-xl flex justify-center text-chocolate items-center font-bely text-center font-bold">Organic + Vegan Dark Chocolate <br/>
Handmade in Sunny Southern California
</div><div className="mt-4 flex justify-center items-center space-x-4	 ">
<a href="mailto:covechocolate@gmail.com"><button className="bg-[#6b470f]  font-bely p-3 px-10 mb-1 text-white shadow-xl rounded-xl">
 Contact</button></a>
<button><a href="https://instagram.com/cove.chocolate/">
<Image src="/instaLogo.png" alt="logo" width={50} height={50} /></a>
</button></div>
    </div>  
    <video
    autoPlay
    loop
    muted
    className="absolute -z-10 h-screen w-screen object-cover"
  >
    <source
      src="https://purecous.s3.us-east-2.amazonaws.com/BirdPoopRock.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
  
    </div>
    </div>
  )
}
