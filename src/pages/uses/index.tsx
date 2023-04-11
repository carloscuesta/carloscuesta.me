import { NextSeo } from 'next-seo'
import Image from 'next/image'

import PageTitle from 'src/components/shared/PageTitle'
import Wrapper from 'src/components/shared/Wrapper'
import Section from 'src/components/pages/uses/Section'

const Uses = () => (
  <>
    <NextSeo
      canonical="https://carloscuesta.me/uses"
      title="Carlos Cuesta – Uses"
    />

    <main>
      <Wrapper>
        <PageTitle title="Uses" />

        <div>
          <Image
            src="https://res.cloudinary.com/carloscuesta/image/upload/v1659775881/carloscuesta-setup_z1azyb.jpg"
            alt="Carlos Cuesta workspace setup"
            width={2016}
            height={1134}
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
                link: 'https://www.dell.com/es-es/shop/monitor-curvo-dell-ultrasharp-38-con-concentrador-y-usb-c-u3821dw/apd/210-axnt/monitores-y-accesorios',
              },
              {
                category: 'Webcam',
                title: 'Logitech C920',
                link: 'https://bit.ly/3jDlMZp',
              },
              {
                category: 'Keyboard',
                title: 'QK65 – QwertyKeys',
                link: 'https://www.qwertykeys.com',
              },
              {
                category: 'Mouse',
                title: 'Logitech MX Master 3S',
                link: 'https://www.logitech.com/products/mice/mx-master-3s.910-006560.html',
              },
              {
                category: 'Desk Matt',
                title: 'Oakywood Merino Wool Felt & Cork Grey',
                link: 'https://oakywood.shop/products/grey-felt-cork-desk-mat',
              },
              {
                category: 'Headphones',
                title: 'Airpods Pro',
                link: 'https://www.apple.com/airpods-pro',
              },
              {
                category: 'Lighting',
                title: 'BenQ Screenbar',
                link: 'https://www.benq.com/en-us/lamps/computer-desklamp/screenbar.html',
              },
              {
                category: 'Headphones',
                title: 'Bose QuietComfort 45',
                link: 'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke',
              },
              {
                category: 'Anti-fatigue standing mat',
                title: 'Muvmat',
                link: 'https://en.aeris.de/products/aeris-muvmat-schwarz-ohne-bezug',
              },
              {
                category: 'Monitor Arm',
                title: 'Ergotron HX',
                link: 'https://www.ergotron.com/en-us/products/product-details/45-475',
              },
              {
                category: 'Lighting',
                title: 'Logitech Litra Glow',
                link: 'https://www.logitech.com/products/lighting/litra-glow.946-000002.html',
              },
              {
                category: 'Microphone',
                title: 'Shure MV7',
                link: 'https://www.shure.com/products/microphones/mv7',
              },
              {
                category: 'Boom Arm',
                title: 'Elgato Wave Mic Arm LP',
                link: 'https://www.elgato.com/wave-mic-arm-lp',
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
      </Wrapper>
    </main>
  </>
)

export default Uses
