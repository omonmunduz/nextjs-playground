import Features from "@/components/Features"
import Hero from "@/components/Hero"
import Partners from "@/components/Partners"
import Workflow from "@/components/Workflow"
import Image from "next/image"

export default function Home() {
  return (
         <main>
            <Hero/>
            <Features/>
            <Partners/>
            <Workflow/>
         </main>
  )
}
 