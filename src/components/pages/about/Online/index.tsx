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
    url: 'https://www.linkedin.com/in/crloscuesta/'
  },
  {
    name: 'Email',
    url: 'mailto:hi@carloscuesta.me'
  }
]

const Online = () => (
  <section>
    <SectionTitle title='Online' />

    <ul className='grid grid-cols-2 gap-3 sm:grid-flow-col sm:grid-cols-[repeat(4,min-content)]'>
      {profiles.map((profile) => (
        <li key={profile.name}>
          <a href={profile.url} className="flex sm:space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-1000 shadow-xs bg-transparent border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm" target='_blank' rel='noopener noreferrer'>{profile.name}</a>
        </li>
      ))}
    </ul>
  </section>
)

export default Online
