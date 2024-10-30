import {JetBrains_Mono} from "next/font/google"
import Link from "next/link"

const jetBrains = JetBrains_Mono({
    subsets:["latin"],
    weight:["600"]
})

export default function Logo() {
  return (
  
    <h1 className={`text-2xl font-semibold ${jetBrains.className}`}>Photo <span className="text-[#00ff99]">Feed</span></h1>
  
  )
}
