## Game of Life and Death

An implementation of the [Game of Life and Death](https://www.youtube.com/watch?v=JkGZ2Hl1l8c) in .NET Core and React.

## Play

Although the game is not yet finished, you can see the latest version built from `master` here: https://glacial-springs-72583.herokuapp.com/

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
