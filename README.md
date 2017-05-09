## Game of Life and Death

An implementation of the [Game of Life and Death](https://www.youtube.com/watch?v=JkGZ2Hl1l8c) in .NET Core and React.

| Status | Description |
|--|--|
| CI | [![AppVeyor](https://img.shields.io/appveyor/ci/deltaidea/golad/master.svg)](https://ci.appveyor.com/project/deltaidea/golad)
| Frontend deps | [![David](https://img.shields.io/david/deltaidea/golad.svg)](https://david-dm.org/deltaidea/golad) [![David](https://img.shields.io/david/dev/deltaidea/golad.svg)](https://david-dm.org/deltaidea/golad?type=dev)
| Repo stats | [![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/deltaidea/golad.svg)](http://isitmaintained.com/project/deltaidea/golad "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/deltaidea/golad.svg)](http://isitmaintained.com/project/deltaidea/golad "Percentage of issues still open")
| Style guide | [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Play

Although the game is not yet finished, you can see the latest version built from `master` here: http://game-of-life-and-death.herokuapp.com/

## Quickstart

- Install latest [.NET Core](https://www.microsoft.com/net/core#windowscmd)
- Install latest [Node.js](https://nodejs.org/en/)
- Clone this repo

```Bash
# Install dependencies for backend and frontend
dotnet restore
npm install

# Rebuild the project after modifications
dotnet build

# Start the server locally in production mode - with ASPNETCORE_ENVIRONMENT=Production
npm run app-prod
```

#### Use live reload when working on frontend

```Bash
# In a separate terminal, use this to start webpack-dev-server
# This provides JS assets on a separate port. The server in dev mode links `<script>`s to it
# Webpack will watch for changes and refresh the page after recompiling
npm start

# Start the server locally in dev mode - with ASPNETCORE_ENVIRONMENT=Development
npm run app-dev
```

## Production build

```Bash
dotnet publish
```

Default output folder is `src/Golad/bin/Debug/netcoreapp1.1/publish/`.

More info about publish command [here](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-publish).

#### Deploying for fun

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/deltaidea/golad)

This is completely free.

Go to the app settings and change automatic deploys to use your fork if you want.

## API Reference

No public API exists yet.

## Tests

#### Backend

```Bash
cd tests/Golad.Tests
dotnet test
```

#### Frontend

TODO

## License

WTFPL, see [LICENSE.md](./LICENSE.md).
