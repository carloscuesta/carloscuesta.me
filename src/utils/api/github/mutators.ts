export type Repository = {
  description: string,
  language?: string,
  name: string,
  stars: number,
  url: string
}

export const transformRepositories = (
  payload: {
    description: string,
    language: string,
    name: string,
    stargazers_count: number,
    html_url: string
  }[]
): Repository[] => {
  return payload.map((repo) => ({
    description: repo.description,
    language: repo.language,
    name: repo.name,
    stars: repo.stargazers_count,
    url: repo.html_url
  }))
}

export type UserInformation = {
  followers: number
}

export const transformUserInformation = (
  payload: UserInformation
): UserInformation => ({
  followers: payload.followers
})
