// @flow
export type Repository = {
  description: string,
  language?: string,
  name: string,
  stars: string,
  url: string
}

export const transformRepositories = (payload: Object): Array<Repository> => {
  return payload.items.map((repo) => ({
    description: repo.description,
    language: repo.language && repo.language.toLowerCase(),
    name: repo.name,
    stars: repo.stargazers_count,
    url: repo.html_url
  }))
}
