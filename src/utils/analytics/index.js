// @flow
export const GA_TRACKING_ID: string = 'UA-67824860-3'

const isFunction = (fn) => typeof fn === 'function'

export const trackPageView = (url: string) => {
  if (isFunction(window.ga)) {
    window.ga('set', 'page', url)
    window.ga('send', 'pageview')
  }
}

export const trackEvent = (event: Object) => {
  if (isFunction(window.ga)) {
    window.ga('send', 'event', event)
  }
}
