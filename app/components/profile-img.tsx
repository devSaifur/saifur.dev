'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export function ProfileImg() {
  const MotionImg = motion.create(Image)

  return (
    <MotionImg
      id="profile-picture"
      src="/images/profile-picture.webp"
      alt="profile"
      width={200}
      height={200}
      loading={'eager'}
      animate={{
        y: [-7, 7, -7]
      }}
      transition={{
        duration: 3.5,
        ease: 'easeInOut',
        repeat: Infinity
      }}
      className="size-36 rounded-full outline outline-2 outline-accent brightness-90 lg:order-2 lg:mx-auto lg:ml-6 lg:size-80 lg:rounded-2xl"
    />
  )
}
