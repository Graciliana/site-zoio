import Image from "next/image";
import { Container } from "@/components/Container";
import zoioImg from "../../public/img/eye-womem.jpg";

export const ZoioTech = () => {
  return (
    <>
      <Container className="flex flex-row-reverse ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              ZOIO Technology
            </h2>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
             Our mission extends beyond technology; we are dedicated to advancing human rights and well-being by leveraging Azure Machine Learning and Cognitive Services to improve global access to ophthalmology care. Through innovative AI-driven solutions, we empower healthcare providers and communities with accurate, accessible, and sustainable eye health diagnostics.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={zoioImg}
              width="520"
              height="500"
              className={"object-cover"}
              alt="human eye"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}

