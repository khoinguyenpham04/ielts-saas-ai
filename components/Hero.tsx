import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full pt-24 md:pt-24 lg:pt-32 xl:pt-48">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl lg:text8xl/none bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Ace Your IELTS with your
              <span className="inline bg-gradient-to-r font-bold from-indigo-500 dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200 via-sky-600 to-indigo-400 bg-clip-text font-display text-3xl  sm:text-4xl lg:text-6xl tracking-tight text-transparent "> AI-Powered  </span> 
              Companion
            </h1>
            <p className="mx-auto md:text-xl text-[#010D3E] tracking-tight mt-6 max-w-[700px]"> 
              Get instant feedback on your speaking mock tests, improve your scores, and achieve your dream IELTS band.
            </p>
          </div>
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="#email">
              <Button className="btn btn-primary">Sign Up for Free</Button>
            </Link>
            <Link href="#how-it-works">
              <Button className="btn btn-text" variant="outline">
                <span>
                  Learn More
                </span>
                <ArrowRight size={25} className="mr-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Practice Anytime <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Progress Every Time
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/example2.png`}
            alt="hero"
            height={900}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}