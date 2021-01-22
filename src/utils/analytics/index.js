// @flow
import getTrackingCode from './tracking'

const GA_TRACKING_ID: string = 'UA-67824860-3'

export const trackingCode: string = getTrackingCode(GA_TRACKING_ID)

type AnalyticsEvent = {
  action: string,
  category: string,
  label: string,
  nonInteraction?: boolean,
  value: number
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window.ma?.trackEvent === 'function') {
    window.ma.trackEvent(
      event.category,
      event.action,
      event.label,
      event.value,
      event.nonInteraction
    )
  }
}
