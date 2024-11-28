'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

export function ProfileImg() {
  const MotionImg = motion.create(Image)

  return (
    <div className="relative size-36 lg:order-2 lg:mx-auto lg:ml-6 lg:size-80">
      <MotionImg
        id="profile-picture"
        src="/images/profile-picture.webp"
        alt="profile"
        fill={true}
        sizes="(max-width: 768px) 30vw, 15vw"
        animate={{
          y: [-7, 7, -7]
        }}
        transition={{
          duration: 3.5,
          ease: 'easeInOut',
          repeat: Infinity
        }}
        className="rounded-full outline outline-2 outline-accent brightness-90 lg:rounded-2xl"
      />
    </div>
  )
}
