import { type Repository } from 'src/utils/api/github/mutators'

type Props = {
  repository: Repository
}

const Project = (props: Props) => (
  <a
    className="border-neutral-150 grid gap-2.5 rounded-lg border p-4 transition-colors hover:border-neutral-400 dark:border-neutral-700 dark:hover:border-neutral-500"
    href={props.repository.url}
    rel="noopener noreferrer"
    target="_blank"
    title={props.repository.name}
  >
    <p className="font-semibold">{props.repository.name}</p>
    <p className="text-sm opacity-70">{props.repository.description}</p>
    <div className="flex items-center gap-2.5 text-sm">
      {props.repository.language && (
        <div className="flex items-center gap-1">
          <div
            className={`h-2 w-2 rounded-full language-project-${props.repository.language.toLowerCase()}`}
          ></div>
          <span className="opacity-70">{props.repository.language}</span>
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
        <span className="opacity-70">{props.repository.stars.format}</span>
      </div>
    </div>
  </a>
)

export default Project
