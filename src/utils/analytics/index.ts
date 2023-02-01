import getTrackingCode from './tracking'

const GA_TRACKING_ID = 'UA-67824860-3'

export const trackingCode = getTrackingCode(GA_TRACKING_ID)

type AnalyticsEvent = {
  action: string,
  category: string,
  label: string,
  nonInteraction?: boolean,
  value: number
}

declare global {
  interface Window {
    ma?: {
      trackEvent?: (
        category: AnalyticsEvent['category'],
        action: AnalyticsEvent['action'],
        label: AnalyticsEvent['label'],
        value: AnalyticsEvent['value'],
        nonInteraction?: AnalyticsEvent['nonInteraction'],
      ) => void 
    };
  }
}

export const trackEvent = (event: AnalyticsEvent) => {
  if (typeof window?.ma?.trackEvent === 'function') {
    window.ma.trackEvent(
      event.category,
      event.action,
      event.label,
      event.value,
      event.nonInteraction
    )
  }
}
