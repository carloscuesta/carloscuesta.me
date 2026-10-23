import ansiStyles from 'ansi-styles'
import { fetchPosts } from 'src/utils/api/blog'
import { fetchRepositories } from 'src/utils/api/github'

export const dynamic = 'force-static'
export const revalidate = 600

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [0, 0, 0]
}

const style = (text: string, ...styles: string[]) => {
  let result = text
  for (const s of styles) {
    if (s.startsWith('#')) {
      const [r, g, b] = hexToRgb(s)
      result = `\x1b[38;2;${r};${g};${b}m${result}\x1b[0m`
    } else if (s.startsWith('bg#')) {
      const hex = s.substring(2)
      const [r, g, b] = hexToRgb(hex)
      result = `\x1b[48;2;${r};${g};${b}m${result}\x1b[0m`
    } else {
      const styleObj = ansiStyles[s as keyof typeof ansiStyles]
      if (styleObj && typeof styleObj === 'object' && 'open' in styleObj) {
        result = `${styleObj.open}${result}${styleObj.close}`
      }
    }
  }
  return result
}

export async function GET() {
  const [posts, repositories] = await Promise.all([
    fetchPosts(),
    fetchRepositories(),
  ])

  const topRepositories = repositories
    .sort((x, y) => y.stars.value - x.stars.value)
    .slice(0, 6)

  const recentPosts = posts.slice(0, 6)

  const padRight = (text: string, width: number) => {
    return text + ' '.repeat(Math.max(0, width - text.length))
  }

  let output = `
  ${style('Carlos Cuesta', 'bold')}

  I'm a Front End Engineer based in Barcelona.
  I code, write and run ${style('bueno.studio', 'bold', '#ea580c')}.

  I love working in-between product, engineering
  and developer experience, currently at ${style('Apple', 'bold')}.

  ${style('x.com/crloscuesta', 'dim')}
  ${style('github.com/carloscuesta', 'dim')}
  ${style('linkedin.com/in/crloscuesta', 'dim')}

  ${style('WRITINGS', 'bold', 'white')}
`

  recentPosts.forEach((post) => {
    const titleAndPadding = style(padRight(post.title, 60), 'bold')
    output += `

  ${titleAndPadding}${style(post.datePublished.formatDate, 'dim')}
  ${style(`carloscuesta.me/blog/${post.slug}`, 'dim')}`
  })

  output += `

  ${style('PROJECTS', 'bold', 'white')}
`

  topRepositories.forEach((repo) => {
    const repoUrl = repo.url.replace('https://', '')
    const nameAndPadding = style(padRight(repo.name, 60), 'bold')
    output += `

  ${nameAndPadding}
  ${repo.description}
  ${style(repoUrl, 'dim')}`
  })

  output += `



  hi@carloscuesta.me
  Carlos Cuesta © ${new Date().getFullYear()}
`

  return new Response(output, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
