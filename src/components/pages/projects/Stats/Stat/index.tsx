type Props = { label: string, value: string, unit?: string }

const Stat = (props: Props) => (
  <div className='flex-1'>
    <article className="border-neutral-100 border-solid border px-4 py-8 rounded-lg dark:border-neutral-800">
      <p className="pb-2 opacity-80">{props.label}</p>
      <p className="font-extrabold text-xl">
        {props.value}
        {props.unit  && (
          <span className="font-medium text-sm opacity-50">{` ${props.unit}`}</span>
        )}
      </p>
    </article>
  </div>
)

export default Stat
