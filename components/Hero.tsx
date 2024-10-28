// components/Hero.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Ace Your IELTS with AI-Powered Assessments
            </h1>
            <p className="mx-auto md:text-xl text-[#010D3E] tracking-tight mt-6 max-w-[700px]"> 
              Get instant feedback on your IELTS writing and speaking, improve your scores, and achieve your dream IELTS band.
            </p>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button className="btn btn-primary">Get Started for Free</Button>
            <Button className="btn btn-text" variant="outline">
              <span>
                Learn More
              </span>
                <ArrowRight size={25} className="mr-1"/>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Master Your IELTS skills <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  your new AI assistant
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/example.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}