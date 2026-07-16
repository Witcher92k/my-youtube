import { YOUTUBE_SEARCH_SUGGESTION_API } from './constants'

// The Google suggestion endpoint has no CORS headers, so fetch() is blocked
// by the browser. JSONP sidesteps that: we load the URL as a <script> tag and
// the response calls a global callback with the data.
let callbackCounter = 0

export const fetchSearchSuggestions = (query, { timeoutMs = 5000 } = {}) =>
  new Promise((resolve, reject) => {
    const callbackName = `__ytSuggest${++callbackCounter}`
    const script = document.createElement('script')

    const cleanup = () => {
      delete window[callbackName]
      script.remove()
      clearTimeout(timer)
    }

    const timer = setTimeout(() => {
      cleanup()
      reject(new Error('Suggestion request timed out'))
    }, timeoutMs)

    window[callbackName] = (data) => {
      cleanup()
      // client=youtube shape: [query, [["suggestion", 0, ...], ...], {...}]
      const suggestions = (data?.[1] ?? [])
        .map((item) => (Array.isArray(item) ? item[0] : item))
        .filter((s) => typeof s === 'string')
      resolve(suggestions)
    }

    script.onerror = () => {
      cleanup()
      reject(new Error('Suggestion request failed'))
    }

    script.src = YOUTUBE_SEARCH_SUGGESTION_API(query, callbackName)
    document.body.appendChild(script)
  })
