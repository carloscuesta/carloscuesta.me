import { useState } from 'react'

import SectionTitle from 'src/components/shared/SectionTitle'
import { type Repository } from 'src/utils/api/github/mutators'

type Props = { repositories: Array<Repository> }

const Repositories = (props: Props) => {
  const [search, setSearch] = useState<string>('')
  const repositories = props.repositories.filter(({ name, description }) => {
    if (!search) return true

    return (
      name.toLowerCase().includes(search.toLowerCase()) ||
      description?.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <section>
      <SectionTitle title="Repositories" />
      <input
        type="search"
        className="mb-4 w-full rounded-md border border-neutral-100 p-2 outline-2 outline-offset-2 outline-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100 dark:outline-neutral-700"
        placeholder="Search repositories..."
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul>
        {repositories.length ? (
          repositories.map((repository) => (
            <li key={repository.name}>
              <a
                href={repository.url}
                className="mb-2 grid grid gap-2 gap-2.5 rounded-lg rounded-md border border-neutral-100 p-3 p-4 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-600"
              >
                <p className="font-semibold">{repository.name}</p>

                <div className="flex flex-col justify-between gap-4 sm:flex-row">
                  <p className="text-sm opacity-70">{repository.description}</p>

                  <div className="flex gap-2 text-sm">
                    {repository.language && (
                      <div className="flex items-center gap-1.5">
                        <div
                          className={`h-2 w-2 rounded-full language-project-${repository.language.toLowerCase()}`}
                        />
                        <span className="opacity-70">
                          {repository.language}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center gap-1">
                      <svg
                        className="p-[1.5px] opacity-70"
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        fill="currentColor"
                      >
                        <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                      </svg>
                      <span className="opacity-70">
                        {repository.stars.format}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </ul>
    </section>
  )
}

export default Repositories
