export const transformPublishedPackages = (
  payload: { objects: Array<{ package: { name: string } }>
}) => {
  return payload.objects.map((pkg) => pkg.package.name)
}

export const transformDownloadsCount = (
  payload: { [key: string]: { downloads: number } }
) => {
  const packages = Object.values(payload)

  return packages
    .map((pkg) => pkg.downloads)
    .reduce((memo, value) => memo + value, 0)
    .toLocaleString()
}
