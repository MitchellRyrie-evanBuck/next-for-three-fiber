"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternityUi/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import CardComponents from "./components/card"

export default function ThreeDCardDemo() {
  return (
    <div className="pt-24 h-full min-h-[100vh] bg-white dark:bg-black">
      <div className="m-auto max-w-[1280px]">
        <div className=" w-full m-auto max-w-[980px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            new Array(20).fill(0).map((item, index) => {
              return <CardComponents index={index} />
            })
          }
        </div>
        <div className="
        fixed top-[50%]  
        w-[120px] h-[240px] translate-y-[-50%]
        bg-slate-300
        ">
        </div>
      </div>
    </div>
  );
}