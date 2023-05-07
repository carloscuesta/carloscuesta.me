const formatViews = (views: number) => {
  return Intl.NumberFormat('en-us').format(views) + ' views'
}

export default formatViews
