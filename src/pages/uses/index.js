// @flow
import type { Node } from 'react'
import { NextSeo } from 'next-seo'

import PageTitle from 'src/components/shared/PageTitle'
import Wrapper from 'src/components/shared/Wrapper'
import Section from 'src/components/pages/uses/Section'
import SetupImage from 'src/components/pages/uses/SetupImage'

const Uses = (): Node => (
  <>
    <NextSeo
      canonical='https://carloscuesta.me/uses'
      title='Carlos Cuesta – Uses'
    />

    <main>
      <Wrapper>
        <PageTitle title='Uses' />

        <div className='row'>
          <div className='col-xs-12 col-sm-6'>
            <Section
              items={[
                {
                  category: 'Desk',
                  title: 'Fully Jarvis Bamboo Standing Desk',
                  link: 'https://www.fully.com/standing-desks/jarvis-adjustable-height-desk-bamboo.html'
                },
                {
                  category: 'Laptop',
                  title: 'MacBook Pro 15 (Mid 2014), i7 @ 2,5GHz, 16 GB',
                  link: 'https://support.apple.com/kb/sp704'
                },
                {
                  category: 'Chair',
                  title: 'Ikea Markus',
                  link: 'https://www.ikea.com/es/es/p/markus-silla-trabajo-glose-negro-40103100/'
                },
                {
                  category: 'Monitor',
                  title: 'Dell U3821DW',
                  link: 'https://www.dell.com/es-es/shop/monitor-curvo-dell-ultrasharp-38-con-concentrador-y-usb-c-u3821dw/apd/210-axnt/monitores-y-accesorios'
                },
                {
                  category: 'Webcam',
                  title: 'Logitech C920',
                  link: 'https://bit.ly/3jDlMZp'
                },
                {
                  category: 'Keyboard',
                  title: 'Keychron K3 V2',
                  link: 'https://bit.ly/3AonlRy'
                },
                {
                  category: 'Mouse',
                  title: 'Logitech Triathlon M720',
                  link: 'https://bit.ly/3iAMqTr'
                },
                {
                  category: 'Desk Matt',
                  title: 'Eco Leather Desk Matt',
                  link: 'https://bit.ly/3CvZy40'
                },
                {
                  category: 'Headphones',
                  title: 'Airpods Pro',
                  link: 'https://www.apple.com/airpods-pro'
                }
              ]}
              subTitle='Home office equipment'
              title='Gear'
            />

            <Section
              items={[
                {
                  category: 'Text Editor',
                  title: 'Atom',
                  link: 'https://atom.io'
                },
                {
                  category: 'Terminal',
                  title: 'iTerm2',
                  link: 'https://iterm2.com'
                },
                {
                  category: 'Dotfiles',
                  title: 'Carlos Cuesta Dotfiles',
                  link: 'https://github.com/carloscuesta/dotfiles'
                },
                {
                  category: 'Window Management',
                  title: 'Rectangle',
                  link: 'https://rectangleapp.com'
                },
                {
                  category: 'JS Playground',
                  title: 'RunJS',
                  link: 'http://runjs.app'
                },
                {
                  category: 'Design',
                  title: 'Figma',
                  link: 'http://figma.com'
                }
              ]}
              subTitle='Tools to work efficiently'
              title='Software'
            />

            <Section
              items={[
                {
                  category: 'Microphone',
                  title: 'Blue Yeti X / Elgato Wave'
                },
                {
                  category: 'Anti-fatigue standing mat',
                  title: 'Muvmat',
                  link: 'https://en.aeris.de/products/aeris-muvmat-schwarz-ohne-bezug'
                },
                {
                  category: 'Headphones',
                  title: 'Bose QuietComfort 45',
                  link: 'https://www.bose.com/en_us/products/headphones/noise_cancelling_headphones/quietcomfort-headphones-45.html#v=qc45_white_smoke'
                },
                {
                  category: 'Monitor Arm',
                  title: 'Ergotron HX',
                  link: 'https://www.ergotron.com/es-es/productos/detalles-del-producto/45-475'
                },
              ]}
              subTitle='Things to improve the setup'
              title='Wishlist'
            />
          </div>

          <div className='col-xs-12 col-sm-6'>
            <SetupImage />
          </div>
        </div>
      </Wrapper>
    </main>
  </>
)

export default Uses
