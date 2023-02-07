export const props = {
  // @ts-expect-error - Component stub
  Component: (props) => <div {...props}>Component</div>,
  pageProps: { test: '' }
}

export const webVitalMetric = {
  id: 'metric-id',
  label: 'web-vital',
  name: 'metric-name',
  value: 1337
}
