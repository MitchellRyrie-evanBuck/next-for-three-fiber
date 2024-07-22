import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from '../../styles/header.module.scss'
import { useThemeMode } from '@/hooks/useThemeMode';

interface InNavItem {
  href: string;
  children: React.ReactNode,
  onMouseEnter: (ev: MouseEvent) => void;
}

const NavItem: FC<InNavItem> = ({ href, children, onMouseEnter }) => {
  const router = useRouter();
  const isActive = router.pathname === href;
  const { currentTheme, isDarkMode, isLightMode, toggleTheme } = useThemeMode()

  return (
    <Link href={href} className="h-full pr-4 pl-4 cursor-pointer flex items-center justify-center">
      <motion.div
        className={`h-full `}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        layout
        onHoverStart={onMouseEnter}
      >
        <span className={`${isActive && isLightMode ? styles.dotActive : isActive && isDarkMode ? styles.dotDarkActive : ''  } ${isLightMode ? styles['is-dark'] : styles['is-light'] } relative text-black dark:text-white  h-full flex items-center justify-center`} >{children}</span>
      </motion.div>
    </Link>
  );
};

export default NavItem;