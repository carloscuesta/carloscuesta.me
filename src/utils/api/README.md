# API

This directory contains the `apiClients` we use on the `pages` for fetching data.

The `callApi` function is the one who handles the requests to external APIs using `fetch`.
This function also caches the responses 2 hours once they had been fetched.
The data is transformed using the mutator function that is received as an argument.
