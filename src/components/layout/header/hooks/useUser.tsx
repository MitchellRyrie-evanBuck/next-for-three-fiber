import { useState } from "react";

import { MultiStepLoader as Loader } from "@/components/aceternityUi/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { AvatarIcon } from "@radix-ui/react-icons"
import { useThemeMode } from '@/hooks/useThemeMode';

export const MultiStepLoaderDemo = (
) => {
  const [loading, setLoading] = useState(false);
  const { currentTheme, isDarkMode, isLightMode, toggleTheme } = useThemeMode()

  return (
    <div>
      <AvatarIcon
        onClick={() => setLoading(true)}
        color={isLightMode ? '#000' : '#FFF'} width={20} height={20} />
    </div >
  )
}



