import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";


import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const ExploreOfferings = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
             Automated Fundus Exam Analysis
            </p>

           
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
             SaaS Platform for Healthcare Providers
            </p>

            
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Support AI Assistant
            </p>

            
          </div>
        </div>
      </div>
    </Container>
  );
};
