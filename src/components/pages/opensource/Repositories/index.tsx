import { useState } from 'react'

import SectionTitle from 'src/components/shared/SectionTitle'
import { type Repository } from 'src/utils/api/github/mutators'

type Props = { repositories: Array<Repository> }

const Repositories = (props: Props) => {
  const [search, setSearch] = useState<string>('')
  const repositories = props.repositories.filter(({ name, description }) => {
    if (!search) return true

    return name.toLowerCase().includes(search.toLowerCase()) || 
      description?.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <section>
      <SectionTitle title='Repositories' />
      <input type='search' className='outline-2 outline-offset-2 outline-pink-200 border-2 border-pink-300 w-full mb-4 p-2 rounded-md dark:bg-neutral-900 dark:text-neutral-100' placeholder='Search repositories...' onChange={(event)  => setSearch(event.target.value)} />
      <ul>
        {repositories.length
          ? repositories.map((repository) => (
            <li
              className='mb-4 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:transition-colors rounded-md overflow-hidden'
              key={repository.name}
            >
              <a className={`flex p-4 flex-col md:flex-row border-l-4 language-${repository.language?.toLowerCase()}`}
                href={repository.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <b className='font-semibold'>{repository.name}</b>
                <p className='flex-1 my-2 md:mx-4 md:my-0 opacity-75'>{repository.description}</p>
                <div className='flex items-center text-sm'>
                  <svg className='fill-amber-400 mx-1 p-[1px]' viewBox='0 0 16 16' width='16' height='16' fill='currentColor'>
                    <path d='M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z' />
                  </svg>
                  <span>{repository.stars.format}</span>
                </div>
              </a>
            </li>
          ))
          : <p>No repositories found.</p>
        }
      </ul>
    </section>
  )
}

export default Repositories
