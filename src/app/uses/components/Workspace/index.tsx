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
    link: 'https://amzn.id/UHX1DFX',
  },
  {
    category: 'Webcam',
    title: 'Elgato Facecam',
    link: 'https://amzn.id/wbWhDOO',
  },
  {
    category: 'Keyboard',
    title: 'QK65',
    link: 'https://qwertykeys.notion.site/QK65-Build-Guide-74e558d2ac3f4979939c9a84cb3cbf22',
  },
  {
    category: 'Mouse',
    title: 'Logitech MX Master 3S',
    link: 'https://amzn.id/N82BPgO',
  },
  {
    category: 'Mouse',
    title: 'Logitech Lift',
    link: 'https://www.logitech.com/en-eu/shop/p/lift-vertical-ergonomic-mouse',
  },
  {
    category: 'Desk',
    title: 'Oakywood Merino Wool Felt & Cork Grey',
    link: 'https://oakywood.shop/products/grey-felt-cork-desk-mat',
  },
  {
    category: 'Headphones',
    title: 'Airpods Pro 3',
    link: 'https://www.apple.com/airpods-pro/',
  },
  {
    category: 'Lighting',
    title: 'BenQ Screenbar',
    link: 'https://amzn.id/7xtEmWR',
  },
  {
    category: 'Headphones',
    title: 'Bose QuietComfort 45',
    link: 'https://amzn.id/7wuXIVm',
  },
  {
    category: 'Desk',
    title: 'Muvmat',
    link: 'https://en.aeris.de/products/aeris-muvmat-schwarz-ohne-bezug',
  },
  {
    category: 'Monitor Arm',
    title: 'Ergotron HX',
    link: 'https://amzn.id/Gy0rbL1',
  },
  {
    category: 'Lighting',
    title: 'Logitech Litra Glow',
    link: 'https://amzn.id/iwfwL12',
  },
  {
    category: 'Microphone',
    title: 'Shure MV7',
    link: 'https://amzn.id/WrvUvWw',
  },
  {
    category: 'Boom Arm',
    title: 'Elgato Wave Mic Arm LP',
    link: 'https://amzn.id/yScr2WM',
  },
  {
    category: 'Charger',
    title: 'Belkin BoostCharge Pro',
    link: 'https://amzn.id/5IQt2Xe',
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
  {
    category: 'Furniture',
    title: 'IKEA Vihals',
    link: 'https://www.ikea.com/es/es/p/vihals-estanteria-10-baldas-blanco-70483274/',
  },
  {
    category: 'Furniture',
    title: 'IKEA Skadis',
    link: 'https://www.ikea.com/es/es/p/skadis-tablero-perforado-blanco-00320803/',
  },
] as const

const Workspace = () => (
  <div className="rounded-lg border border-b-0 border-neutral-200 dark:border-neutral-800 overflow-auto mt-6">
    <div className="w-full table text-sm">
      <div className="table-header-group bg-neutral-50 dark:bg-neutral-800">
        <div className="table-row border-neutral-200 dark:border-neutral-800">
          <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell -10 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 px-4">
            Category
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell h-10 text-left align-middle font-medium text-neutral-500 dark:text-neutral-400 min-w-full px-4">
            Product
          </div>
          <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell"></div>
        </div>
      </div>

      <div className="table-row-group">
        {items.map((item) => (
          <a
            href={item.link}
            key={item.title}
            rel="noopener noreferrer"
            target="_blank"
            className="table-row border-neutral-200 dark:border-neutral-800 transition-colors hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 outline-hidden focus:bg-neutral-200/50 dark:focus:bg-neutral-800/50"
          >
            <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell p-2 align-middle px-4 py-3 font-medium">
              {item.category}
            </div>
            <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell p-2 align-middle px-4 py-3">
              {item.title}
            </div>

            <div className="border-b border-neutral-200 dark:border-neutral-800 table-cell p-2 align-middle text-neutral-400 dark:text-neutral-500">
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
