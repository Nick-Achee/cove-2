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
    <div className="text-xl flex justify-center items-center text-center font-bold">Organic + Vegan Dark Chocolate <br/>
Handmade in Sunny Southern California
</div><div className="mt-10 grid grid-cols-2	 ">
<button className="bg-[#6b470f] p-3 text-white shadow-md rounded-md">Contact</button>
<button><Link href="https://instagram.com/cove.chocolate/">
<Image src="/instaLogo.png" alt="logo" width={50} height={50} /></Link>
</button></div>
<div className="bg-white font-bold p-10 shadow-md rounded-sm m-4 hover:text-white">Hello</div>
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
