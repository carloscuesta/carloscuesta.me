export type Repository = {
  description: string
  language?: string
  name: string
  stars: {
    value: number
    format: string
  }
  url: string
}

export const transformRepositories = (
  payload: {
    description: string
    language: string
    name: string
    stargazers_count: number
    html_url: string
  }[]
): Repository[] => {
  return payload.map((repo) => ({
    description: repo.description,
    language: repo.language,
    name: repo.name,
    stars: {
      value: repo.stargazers_count,
      format: repo.stargazers_count.toLocaleString(),
    },
    url: repo.html_url,
  }))
}

export type UserInformation = {
  followers: string
}

export const transformUserInformation = (payload: {
  followers: number
}): UserInformation => ({
  followers: payload.followers.toLocaleString(),
})
