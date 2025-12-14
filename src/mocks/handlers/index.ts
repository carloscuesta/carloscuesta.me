import githubHandlers from './github'
import npmHandlers from './npm'
import apiHandlers from './api'

const handlers = [...githubHandlers, ...npmHandlers, ...apiHandlers]

export default handlers
