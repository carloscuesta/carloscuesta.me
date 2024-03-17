'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import cn from 'src/utils/cn'
import Wrapper from 'src/components/Wrapper'
import Links from './Links'
import Hamburger from './Hamburger'
import ThemeSelector from './ThemeSelector'

const NavigationMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <header
      className={cn(
        'sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2',
        'dark:border-neutral-900 dark:bg-black/75 sm:py-3',
        isHamburgerOpen ? '' : 'backdrop-blur-xl',
      )}
    >
      <Wrapper>
        <nav className="flex items-center justify-between font-semibold">
          <Link href="/" className="grid grid-flow-col items-center">
            <>
              <Image
                alt="Carlos Cuesta"
                className="mr-3 rounded-full opacity-100"
                height={32}
                src="https://res.cloudinary.com/carloscuesta/image/upload/s--g0fD72tH--/c_scale,q_100,w_72/v1594588508/carloscuesta.jpg"
                width={32}
              />

              <span className="font-bold">Carlos Cuesta</span>
            </>
          </Link>

          <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
            <Links
              links={[
                { href: '/about', text: 'About' },
                { href: '/blog', text: 'Blog' },
                { href: '/photos', text: 'Photos' },
              ]}
            />

            <Hamburger
              isOpen={isHamburgerOpen}
              setIsOpen={setIsHamburgerOpen}
            />

            <ThemeSelector />
          </div>
        </nav>
      </Wrapper>
    </header>
  )
}

export default NavigationMenu
