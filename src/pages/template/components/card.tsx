import { motion } from "framer-motion";
import Image from "next/image";
import third from "@/static/images/second.png"




export default function CardComponents({
  index
}: any ){
 return (
   <motion.div
     whileHover={{ scale: 1.1 }}
     whileTap={{ scale: 0.9 }}
     className="
              h-[300px] 
              relative drop-shadow-xl rounded overflow-hidden
              cursor-pointer
              " key={index}>

     <Image
       className="absolute inset-0 z-10 w-full h-full object-cover transition duration-500 ease-in-out"
       src={third}
       alt="Random Image"
       layout="fill"
     />

     <motion.div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white z-20">
       <motion.div className="text-lg font-semibold">Title</motion.div>
       <motion.div className="text-sm mt-2">
         介绍内容。。。此内容是关于**********************的内容
       </motion.div>
     </motion.div>
   </motion.div>
 )
}