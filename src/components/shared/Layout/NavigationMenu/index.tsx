import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Wrapper from 'src/components/shared/Wrapper'
import Links from './Links'
import Hamburger from './Hamburger'

const NavigationMenu = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)

  return (
    <header className={`z-10 py-2 sm:py-3 shadow-md sticky top-0 bg-white/75 dark:bg-neutral-900/75 ${isHamburgerOpen ? '' : 'backdrop-blur-xl'}`}>
      <Wrapper>
        <nav className='flex justify-between items-center font-semibold'>
          <Link href='/' className='grid grid-flow-col items-center hover:opacity-60 transition-opacity'>
            <>
              <Image
                alt='Carlos Cuesta'
                className='rounded-full mr-3 opacity-100'
                height={32}
                src='https://res.cloudinary.com/carloscuesta/image/upload/s--g0fD72tH--/c_scale,q_100,w_72/v1594588508/carloscuesta.jpg'
                width={32}
              />

              <span className="font-bold">Carlos Cuesta</span>
            </>
          </Link>

          <Links
            links={[
              { href: '/about', text: 'About' },
              { href: '/blog', text: 'Blog' },
              { href: '/opensource', text: 'Open Source' }
            ]}
          />

          <Hamburger isOpen={isHamburgerOpen} setIsOpen={setIsHamburgerOpen} />
        </nav>
      </Wrapper>
    </header>
  );
}

export default NavigationMenu
