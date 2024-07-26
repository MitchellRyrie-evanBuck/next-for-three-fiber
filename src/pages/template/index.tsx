"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternityUi/3d-card";
import Link from "next/link";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, colors, sampleArcs } from "@/data/blobe"
const World = dynamic(() => import("@/components/aceternityUi/globe").then((m) => m.World), {
  ssr: false,
});

export default function ThreeDCardDemo() {
  return (
    <div className="h-full min-h-[100vh] bg-white dark:bg-black">
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Hover over this card to unleash the power of CSS perspective
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
}
