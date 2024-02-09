const items = [
  {
    category: 'Desk',
    title: 'Jarvis Bamboo Standing Desk',
    link: 'https://store.hermanmiller.com/standing-desks/jarvis-bamboo-standing-desk/100439172.html?lang=en_US&sku=100439172',
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
    category: 'Desk',
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
    category: 'Desk',
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
] as const

const Workspace = () => (
  <div className="rounded-lg border border-b-0 dark:border-neutral-800 overflow-auto mt-6">
    <div className="w-full table text-sm">
      <div className="table-header-group bg-neutral-100 dark:bg-neutral-800">
        <div className="table-row dark:border-neutral-800">
          <div className="border-b border-inherit table-cell -10 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 px-4">
            Category
          </div>
          <div className="border-b border-inherit table-cell h-10 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 min-w-full px-4">
            Product
          </div>
          <div className="border-b border-inherit table-cell"></div>
        </div>
      </div>

      <div className="table-row-group">
        {items.map((item) => (
          <a
            href={item.link}
            key={item.title}
            rel="noopener noreferrer"
            target="_blank"
            className="table-row dark:border-neutral-800 transition-colors hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50"
          >
            <div className="border-b border-inherit table-cell p-2 align-middle px-4 py-3 font-medium">
              {item.category}
            </div>
            <div className="border-b border-inherit table-cell p-2 align-middle px-4 py-3">
              {item.title}
            </div>

            <div className="border-b border-inherit table-cell p-2 align-middle text-neutral-400 dark:text-neutral-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 m-auto"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Workspace
