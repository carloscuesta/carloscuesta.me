import githubHandlers from './github'
import npmHandlers from './npm'

const handlers = [...githubHandlers, ...npmHandlers]

export default handlers
