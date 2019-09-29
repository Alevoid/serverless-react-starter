# serverless-fullstack-react-starter

## Install and Run:

To install dependencies in packages and run fe and sls, just run:

```
yarn quickInstall && yarn start
```

This is enough to have the project app and running;

## Single packages:

### serverless/

To install project:

```
yarn
```

To set up serverless:

```
sls create -t serverless.yml
```

To run the API:

```
sls offline
```

To run the single handler():

```
sls invoke local -f api
```

### client/

```
yarn && yarn start
```
