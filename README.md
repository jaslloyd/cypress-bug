This repo is to be used as an example of a Bug for MSW and Cypress see https://github.com/mswjs/msw/issues/405

## How to reproduce

1. Start react App yarn start (MSW is enabled in dev mode)
2. Start cypress and run `home.spec.js` and open your dev tools
3. One assertion will fail will fail (this is on purpose)
4. Look at the network traffic over 1400 requests are made, this on a bigger project with code splitting and everything results in super super slow js bundles being downloaded

To confirm its MSW and the service worker

1. Close cypress, open index.js comment out the the following block (thereby disabling msw)

```
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}
```

2. Unregister the service worker in the application tab of dev tools
3. Open cypress and run the same test again, you should see 12 requests
