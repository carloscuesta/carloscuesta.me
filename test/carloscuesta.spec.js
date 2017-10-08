/* global describe, expect, it */
const cache = require('memory-cache')
const request = require('supertest')

const app = require('../src/carloscuesta')

describe('carloscuesta.me', () => {
  describe('views', () => {
    describe('index', () => {
      it('should render home and set cache', (done) => {
        request(app).get('/').end((err, res) => {
          if (err) {
            return console.error(err)
          }
          expect(res.status).toEqual(200)
          expect(cache.size()).toBeGreaterThan(1)
          expect(res.headers['cache-control']).toMatchSnapshot()
          done()
        })
      })
    })

    describe('aboutme', () => {
      it('should render about and set cache', (done) => {
        request(app).get('/about').end((err, res) => {
          if (err) {
            return console.error(err)
          }
          expect(res.status).toEqual(200)
          expect(res.headers['cache-control']).toMatchSnapshot()
          done()
        })
      })
    })
  })

  describe('cache', () => {
    it('should clear the cache', (done) => {
      request(app).get(`/${process.env.PARAM_CLEAN}`).end((err, res) => {
        if (err) {
          return console.error(err)
        }
        expect(res.headers['cache-control']).toBeUndefined()
        expect(cache.size()).toBe(0)
        done()
      })
    })
  })
})
