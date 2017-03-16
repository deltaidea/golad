## Game of Life and Death

An implementation of the [Game of Life and Death](https://www.youtube.com/watch?v=JkGZ2Hl1l8c) in .NET Core and React.

## Play

TODO: Link to a live deployment.

## Quickstart

- Install latest [.NET Core](https://www.microsoft.com/net/core#windowscmd)
- Install latest [Node.js](https://nodejs.org/en/)
- Clone this repo

```Bash
cd Golad

# Install dependencies for backend and frontend
dotnet restore
npm install

# Rebuild the project after modifications
dotnet build

# Start the server locally
dotnet run
```

## Production build

```Bash
cd Golad
dotnet publish
```

Default output folder is `./bin/Debug/netcoreapp1.1/publish`.

More info about publish command [here](https://docs.microsoft.com/en-us/dotnet/articles/core/tools/dotnet-publish).

## API Reference

No public API exists yet.

## Tests

#### Backend

```Bash
cd Golad.Tests

# Install dependencies
dotnet restore

# Rebuild tests after modifications
dotnet build

# Run the unit tests
dotnet test
```

#### Frontend

TODO

## License

WTFPL, see [LICENSE.md](./LICENSE.md).
