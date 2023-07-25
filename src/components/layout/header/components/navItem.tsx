import React, { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from '../../styles/header.module.scss'

interface InNavItem {
  href: string;
  children: React.ReactNode
}

const NavItem: FC<InNavItem> = ({ href, children }) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <Link href={href}>
      <motion.div
        className={`pr-4 pl-4 cursor-pointer `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        layout
      >
        <span className={`${isActive ? styles.dotActive : styles.dotInactive} text-black`} >{children}</span>
      </motion.div>
    </Link>
  );
};

export default NavItem;