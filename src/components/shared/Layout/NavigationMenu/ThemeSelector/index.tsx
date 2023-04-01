import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { useTheme } from 'next-themes'

import Icon from './Icon'

const themes = [
  { id: 'system', label: 'System' },
  { id: 'light', label: 'Light' },
  { id: 'dark', label: 'Dark' }
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
            aria-label='Select theme'
            className={`relative w-10 h-10 rounded-full hover:opacity-100 transition-opacity flex items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-neutral-200 dark:focus:ring-neutral-600 ${open ? 'bg-neutral-100 dark:bg-neutral-800 opacity-100' : 'opacity-50'}`}
          >
            {mounted && resolvedTheme
              ? <Icon theme={resolvedTheme} />
              : <div className="w-5 h-5" />
            }
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className="absolute mt-2 right-0 xl:left-0 xl:right-[unset] p-2 overflow-auto text-base origin-top-right shadow-lg max-h-60 w-42 rounded-xl bg-white dark:bg-neutral-900 bg-blur backdrop-blur-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {themes
                .map((theme) => (
                  <Listbox.Option
                    key={theme.id}
                    className={({ active }) =>
                      `relative text-sm select-none py-2 pl-10 pr-4 rounded-md ${active ? "bg-neutral-100 dark:bg-neutral-800" : ""}`
                    }
                    value={theme.id}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${selected ? "font-medium" : "font-normal"
                            }`}
                        >
                          {theme.label}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
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