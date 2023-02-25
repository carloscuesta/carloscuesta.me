export type callApiOptions<Response, Data> = {
  mutator: (data: Response) => Data,
  requestOptions?: RequestInit,
  url: string
}

const callApi = async <Response, Data>(options: callApiOptions<Response, Data>) => {
  try {
    const response = await fetch(options.url, options.requestOptions)
    const data = await response.json()
    const dataTransformed = options.mutator(data)

    return dataTransformed
  } catch (exception) {
    throw Error('ERROR @ callApi: ' + exception)
  }
}

export default callApi
