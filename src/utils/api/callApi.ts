export type callApiOptions = {
  mutator: (data: any) => any,
  requestOptions?: RequestInit,
  url: string
}

const callApi = async (options: callApiOptions): Promise<any> => {
  try {
    const response = await fetch(options.url, options.requestOptions)
    const data = await response.json()
    const dataTransformed = options.mutator(data)

    return dataTransformed
  } catch (exception) {
    console.error('ERROR @ callApi:', exception)
  }
}

export default callApi
