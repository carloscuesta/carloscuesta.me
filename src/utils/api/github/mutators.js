// @flow
export type Repository = {
  description: string,
  language?: string,
  name: string,
  stars: number,
  url: string
}

export const transformRepositories = (payload: Array<Object>): Array<Repository> => {
  return payload.map((repo) => ({
    description: repo.description,
    language: repo.language && repo.language.toLowerCase(),
    name: repo.name,
    stars: repo.stargazers_count,
    url: repo.html_url
  }))
}
