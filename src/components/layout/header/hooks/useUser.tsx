import { useState } from "react";

import { MultiStepLoader as Loader } from "@/components/aceternityUi/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { AvatarIcon } from "@radix-ui/react-icons"

export const MultiStepLoaderDemo = (
) => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <AvatarIcon
        onClick={() => setLoading(true)}
        color='#000' width={20} height={20} />
    </div >
  )
}



