// @flow
export const GA_TRACKING_ID: string = 'UA-67824860-3'

export const trackPageView = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, { page_path: url })
}
