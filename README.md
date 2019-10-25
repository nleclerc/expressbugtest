# Express bug test

Express has a bug in how it processes routes defined with regexps.
[The doc says](https://expressjs.com/en/4x/api.html#req.params) that `req.params` is supposed to be an array when a route is defined with a regexp. Turns out it still is an object.
So either the doc is wrong or there's a bug.
