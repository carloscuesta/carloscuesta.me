type Props = { label: string; value: string; unit?: string }

const Stat = (props: Props) => (
  <div className="flex-1">
    <article className="rounded-lg border border-solid border-neutral-100 px-4 py-8 dark:border-neutral-800">
      <p className="pb-2 opacity-80">{props.label}</p>
      <p className="text-xl font-extrabold">
        {props.value}
        {props.unit && (
          <span className="text-sm font-medium opacity-50">{` ${props.unit}`}</span>
        )}
      </p>
    </article>
  </div>
)

export default Stat
