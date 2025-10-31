import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Suspense } from "react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}

      <div className="absolute inset-0 z-0">
      <Suspense
      fallback={<div className="w-full h-full  bg-black/70" />}
      >
        <Image
          src="/assets/HeroSvg.svg"
          alt="Industrial architecture background"
          className="w-full h-full object-cover"
          fill
        />
      </Suspense>
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container  px-6 text-center">
        <h1 className=" font-[bronz] font-medium text-4xl md:text-5xl lg:text-4xl text-center    text-white mb-6 text-balance">
          TRANSFORMAMOS IDEIAS EM 
          <br/>
          REALIDADE
        </h1>

        <p className="text-base font-[verdana] md:text-lg text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Somos a Ozuna Engineering, líder angolana em soluções inovadoras de engenharia, telecomunicações, energias
          renováveis e automação. Construímos o futuro com tecnologia de ponta e compromisso com a excelência.
        </p>

        {/* CTA Buttons */}
        <div className=" font-[bronz] flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-[#F1B807]  rounded-md cursor-pointer hover:bg-black  hover:text-white text-black font-normal px-8 py-6 text-base">
            NOSSOS SERVIÇOS
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border cursor-pointer rounded-md  border-white hover:border-[#F1B807]  text-white hover:bg-transparent hover:text-[#F1B807] font-normal px-8 py-6 text-base bg-transparent"
          >
            SOLICITAR ORÇAMENTO
          </Button>
        </div>
      </div>
    </section>
  )
}
