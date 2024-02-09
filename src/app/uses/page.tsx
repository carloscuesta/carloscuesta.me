import { type Metadata } from 'next'
import Image from 'next/image'

import PageTitle from 'src/components/PageTitle'
import Wrapper from 'src/components/Wrapper'
import Section from './components/Section'

export const metadata: Metadata = {
  title: 'Uses',
  alternates: {
    canonical: '/uses',
  },
}

const Uses = () => (
  <Wrapper>
    <main>
      <PageTitle title="Uses" />

      <div>
        <Image
          src={require('./setup.jpg')}
          alt="Carlos Cuesta workspace setup"
          className="max-w-full rounded-md"
          placeholder="blur"
          width={1500}
          height={1232}
          quality={100}
        />

        <Section
          items={[
            {
              category: 'Desk',
              title: 'Fully Jarvis Bamboo Standing Desk',
              link: 'https://www.fully.com/standing-desks/jarvis-adjustable-height-desk-bamboo.html',
            },
            {
              category: 'Laptop',
              title: 'MacBook Pro 14 M1 Pro, 16 GB',
              link: 'https://support.apple.com/kb/SP854',
            },
            {
              category: 'Chair',
              title: 'Herman Miller Aeron',
              link: 'https://www.hermanmiller.com/en_eur/products/seating/office-chairs/aeron-chairs/',
            },
            {
              category: 'Monitor',
              title: 'Dell U3821DW',
              link: 'https://dub.sh/UHX1DFX',
            },
            {
              category: 'Webcam',
              title: 'Elgato Facecam',
              link: 'https://dub.sh/7wuXIVm',
            },
            {
              category: 'Keyboard',
              title: 'QK65 – QwertyKeys',
              link: 'https://www.qwertykeys.com',
            },
            {
              category: 'Mouse',
              title: 'Logitech MX Master 3S',
              link: 'https://dub.sh/N82BPgO',
            },
            {
              category: 'Desk Matt',
              title: 'Oakywood Merino Wool Felt & Cork Grey',
              link: 'https://oakywood.shop/products/grey-felt-cork-desk-mat',
            },
            {
              category: 'Headphones',
              title: 'Airpods Pro',
              link: 'https://dub.sh/kIND87t',
            },
            {
              category: 'Lighting',
              title: 'BenQ Screenbar',
              link: 'https://dub.sh/7xtEmWR',
            },
            {
              category: 'Headphones',
              title: 'Bose QuietComfort 45',
              link: 'https://dub.sh/7wuXIVm',
            },
            {
              category: 'Anti-fatigue standing mat',
              title: 'Muvmat',
              link: 'https://en.aeris.de/products/aeris-muvmat-schwarz-ohne-bezug',
            },
            {
              category: 'Monitor Arm',
              title: 'Ergotron HX',
              link: 'https://dub.sh/Gy0rbL1',
            },
            {
              category: 'Lighting',
              title: 'Logitech Litra Glow',
              link: 'https://dub.sh/iwfwL12',
            },
            {
              category: 'Microphone',
              title: 'Shure MV7',
              link: 'https://dub.sh/WrvUvWw',
            },
            {
              category: 'Boom Arm',
              title: 'Elgato Wave Mic Arm LP',
              link: 'https://dub.sh/yScr2WM',
            },
            {
              category: 'Charger',
              title: 'Belkin BoostCharge Pro',
              link: 'https://dub.sh/5IQt2Xe',
            },
            {
              category: 'Lighting',
              title: 'Govee Flow Plus Light Bars',
              link: 'https://eu.govee.com/collections/tv-gaming-lights/products/govee-rgbicww-wifi-bluetooth-flow-plus-light-bars',
            },
            {
              category: 'Clock',
              title: 'Mi Smart Clock',
              link: 'https://www.mi.com/product/mi-smart-clock/',
            },
          ]}
          subTitle="Home office equipment"
          title="Gear"
        />

        <Section
          items={[
            {
              category: 'Text Editor',
              title: 'VSCode',
              link: 'http://vscode.dev',
            },
            {
              category: 'Terminal',
              title: 'iTerm2',
              link: 'https://iterm2.com',
            },
            {
              category: 'Dotfiles',
              title: 'Carlos Cuesta Dotfiles',
              link: 'https://github.com/carloscuesta/dotfiles',
            },
            {
              category: 'Window Management',
              title: 'Rectangle',
              link: 'https://rectangleapp.com',
            },
            {
              category: 'JS Playground',
              title: 'RunJS',
              link: 'http://runjs.app',
            },
            {
              category: 'Design',
              title: 'Figma',
              link: 'http://figma.com',
            },
          ]}
          subTitle="Tools to work efficiently"
          title="Software"
        />
      </div>
    </main>
  </Wrapper>
)

export default Uses
