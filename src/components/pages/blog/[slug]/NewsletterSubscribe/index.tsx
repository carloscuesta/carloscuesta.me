const NewsletterSubscribe = () => (
  <form
    className='my-8'
    action='https://buttondown.email/api/emails/embed-subscribe/carloscuesta'
    method='post'
    target='popupwindow'
  >
    <p className='text-2xl font-semibold pb-6'>Subscribe 👨‍💻</p>
    
    <div className='text-lg pb-6'>
      <label htmlFor='bd-email'>
        Be the first to know when I write something new! If you don&#39;t like emails, you can
        follow me on {' '}
        <a className='underline underline-offset-2' href='https://twitter.com/intent/follow?screen_name=crloscuesta' rel='noopener noreferrer' target='_blank'>
          twitter
        </a>.
      </label>
    </div>

    <div>
      <div className='grid grid-flow-col gap-3 grid-cols-[70%,30%] sm:grid-cols-[312px,min-content]'>
        <input
          id='bd-email'
          name='email'
          placeholder='you@email.com'
          required
          type='email'
          className='outline-none transition-all focus:ring-2 ring-gray-300 dark:ring-gray-500 sm:space-x-2 px-2 py-1 opacity-100 rounded-md text-gray-700 hover:text-gray-1000  bg-transparent border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm '
        />

        <input type='hidden' value='1' name='embed' />

        <input type='submit' value='Subscribe' className='outline-none transition-all ring-gray-300 dark:ring-gray-500 focus:ring-2 font-semibold px-4 py-1 rounded-md text-gray-700 hover:text-gray-1000 shadow-xs bg-transparent border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm cursor-pointer' />
      </div>
    </div>
  </form>
)

export default NewsletterSubscribe
