import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'

import cn from 'src/utils/cn'
import Icon from './Icon'

const themes = [
  { id: 'system', label: 'System' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' },
] as const

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Listbox value={theme} onChange={(value) => setTheme(value)}>
      {({ open }) => (
        <div className="relative">
          <Listbox.Button
            aria-label="Select theme"
            className={cn(
              'relative flex h-10 w-10 items-center justify-center rounded-full outline-hidden',
              'transition-opacity hover:opacity-100 focus-visible:ring-2',
              'focus-visible:ring-neutral-200 dark:focus:ring-neutral-600',
              open
                ? 'bg-neutral-100 opacity-100 dark:bg-neutral-800'
                : 'opacity-50',
            )}
          >
            {mounted && resolvedTheme ? (
              <Icon theme={resolvedTheme} />
            ) : (
              <div className="h-5 w-5" />
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="w-32 bg-blur absolute right-0 mt-2 max-h-60 origin-top-right overflow-auto rounded-xl bg-white p-2 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-lg focus:outline-none dark:bg-neutral-900 sm:text-sm xl:left-0 xl:right-[unset]"
            >
              {themes.map((theme) => (
                <Listbox.Option
                  key={theme.id}
                  className={({ active }) =>
                    `relative select-none rounded-md py-2 pl-10 pr-4 text-sm ${
                      active ? 'bg-neutral-100 dark:bg-neutral-800' : ''
                    }`
                  }
                  value={theme.id}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={cn(
                          'block cursor-default truncate',
                          selected ? 'font-medium' : 'font-normal',
                        )}
                      >
                        {theme.label}
                      </span>
                      {selected ? (
                        <span className="text-primary absolute inset-y-0 left-0 flex items-center pl-3">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M18.0303 7.96967C18.3232 8.26256 18.3232 8.73744 18.0303 9.03033L11.0303 16.0303C10.7374 16.3232 10.2626 16.3232 9.96967 16.0303L5.96967 12.0303C5.67678 11.7374 5.67678 11.2626 5.96967 10.9697C6.26256 10.6768 6.73744 10.6768 7.03033 10.9697L10.5 14.4393L16.9697 7.96967C17.2626 7.67678 17.7374 7.67678 18.0303 7.96967Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  )
}

export default ThemeSwitch
