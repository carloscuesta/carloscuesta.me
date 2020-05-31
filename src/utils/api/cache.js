// @flow
import NodeCache from 'node-cache'

const apiCache: { set: Function, get: Function } = new NodeCache({ stdTTL: 7200 })

export default apiCache
