// @flow
export const transformPublishedPackages = (payload: { objects: Array<Object> }): Array<string> => {
  return payload.objects.map((pkg) => pkg.package.name)
}

export const transformDownloadsCount = (payload: Object): number => {
  const packages: Array<Object> = Object.values(payload)

  return packages
    .map((pkg) => pkg.downloads)
    .reduce((memo, value) => memo + value, 0)
}
