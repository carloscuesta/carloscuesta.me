const NewsletterSubscribe = () => (
  <form
    className="my-8"
    action="https://buttondown.com/api/emails/embed-subscribe/carloscuesta"
    method="post"
    target="popupwindow"
  >
    <p className="pb-6 text-xl font-bold tracking-tight">Subscribe 👨‍💻</p>

    <div className="pb-6">
      <label htmlFor="bd-email">
        Be the first to know when I write something new! If you don&#39;t like
        emails, you can follow me on{' '}
        <a
          className="underline underline-offset-2"
          href="https://twitter.com/intent/follow?screen_name=crloscuesta"
          rel="noopener noreferrer"
          target="_blank"
        >
          twitter
        </a>
        .
      </label>
    </div>

    <div>
      <div className="grid grid-flow-col grid-cols-[70%_30%] gap-3 sm:grid-cols-[312px_min-content]">
        <input
          id="bd-email"
          name="email"
          placeholder="you@email.com"
          required
          type="email"
          className="text-sm rounded-md border border-neutral-400/30  bg-transparent px-2 py-1 text-neutral-700 opacity-100 outline-hidden ring-neutral-300  transition-all hover:border-neutral-400/50 hover:shadow-xs focus:ring-2 dark:border-neutral-700 dark:text-neutral-200 dark:ring-neutral-500 dark:hover:border-neutral-600 dark:hover:text-white sm:space-x-2"
        />

        <input type="hidden" value="1" name="embed" />

        <input
          type="submit"
          value="Subscribe"
          className="text-sm shadow-2xs cursor-pointer rounded-md border border-neutral-400/30  bg-transparent px-4 py-1 font-semibold text-neutral-700 outline-hidden ring-neutral-300 transition-all hover:border-neutral-400/50 hover:shadow-xs focus:ring-2 dark:border-neutral-700 dark:text-neutral-200 dark:ring-neutral-500 dark:hover:border-neutral-600 dark:hover:text-white"
        />
      </div>
    </div>
  </form>
)

export default NewsletterSubscribe
