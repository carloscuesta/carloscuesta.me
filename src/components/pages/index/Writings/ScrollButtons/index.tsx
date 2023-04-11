type Props = {
  scrollTo: (action: 'next' | 'previous') => void
  scrollPosition: number
  scrollPositionMaxWidth: number
}

const SCROLL_VISIBILITY_THRESHOLD = 1

const ScrollButtons = (props: Props) => (
  <div className="mt-2 flex justify-between">
    <button
      className="mt-2 flex cursor-pointer touch-manipulation items-center text-sm opacity-70 transition-opacity hover:opacity-100 disabled:invisible"
      disabled={props.scrollPosition <= SCROLL_VISIBILITY_THRESHOLD}
      onClick={() => props.scrollTo('previous')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
          clipRule="evenodd"
        />
      </svg>
      <span>Back</span>
    </button>

    <button
      className="flex cursor-pointer touch-manipulation items-center text-sm opacity-70 transition-opacity hover:opacity-100 disabled:invisible"
      disabled={
        props.scrollPosition >=
        props.scrollPositionMaxWidth - SCROLL_VISIBILITY_THRESHOLD
      }
      onClick={() => props.scrollTo('next')}
    >
      <span>Next</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
)

export default ScrollButtons
