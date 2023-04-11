import SectionTitle from 'src/components/shared/SectionTitle'

const profiles = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/crloscuesta',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/carloscuesta',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/crloscuesta/',
  },
  {
    name: 'Email',
    url: 'mailto:hi@carloscuesta.me',
  },
]

const Online = () => (
  <section>
    <SectionTitle title="Online" />

    <ul className="grid grid-cols-2 gap-3 sm:grid-flow-col sm:grid-cols-[repeat(4,min-content)]">
      {profiles.map((profile) => (
        <li key={profile.name}>
          <a
            href={profile.url}
            className="hover:text-neutral-1000 shadow-xs flex flex-none cursor-pointer items-center justify-center rounded-md border border-neutral-400 border-opacity-30 bg-transparent px-4 py-2 text-sm font-semibold leading-none text-neutral-700 opacity-100 transition-all hover:border-opacity-50 hover:shadow-sm dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:text-white sm:space-x-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {profile.name}
          </a>
        </li>
      ))}
    </ul>
  </section>
)

export default Online
