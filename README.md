# impostorGame

Simple API to fetch words, clues and categories used in the "Impostor" game.

## Description

Backend project written in TypeScript that exposes REST endpoints to retrieve words, clues and categories from a MySQL database.

## Features

- Get all words with their associated clues and categories.
- Get a random word (globally or by category).
- List categories and clues.

## Requirements

- Node.js 18+ and npm
- MySQL (or MariaDB)

## Installation

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

## Environment variables

Create a `.env` file in the project root with at least the following variables:

- `PORT` — Port where the server will run (e.g. `3000`).
- `DB_HOST` — MySQL database host.
- `DB_USER` — Database user.
- `DB_PASSWORD` — Database password.
- `DB_NAME` — Database name.

Example `.env`:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=secret
DB_NAME=impostor_db
```

The database connection uses a pool and defaults to port 3306 (see [src/db.ts](src/db.ts)).

## Available scripts

- `npm run dev` — Runs the server in development mode using `ts-node` and `nodemon`.

## Run the application

```bash
npm run dev
```

The server will use the `PORT` value from the environment. Main routes are implemented in [src/endpoints.ts](src/endpoints.ts).

## Endpoints

Available routes (all `GET`):

- `/words` — Returns all words with their clue and category.
- `/words/:category` — Returns a random word for the given category (replace `:category` with the category id).
- `/random` — Returns a random word with its clue.
- `/categories` — Lists all categories.
- `/clues` — Lists all clues with the associated word.

Example `curl` requests:

```bash
# All words
curl http://localhost:3000/words

# Random word (global)
curl http://localhost:3000/random

# Random word by category (e.g. category id = 1)
curl http://localhost:3000/words/1

# List categories
curl http://localhost:3000/categories

# List clues
curl http://localhost:3000/clues
```

## Relevant files

- [src/index.ts](src/index.ts) — Initializes the server and registers routes.
- [src/endpoints.ts](src/endpoints.ts) — Endpoint implementations.
- [src/db.ts](src/db.ts) — MySQL connection pool.

## Contributing

1. Open an issue describing the change.
2. Create a branch following `feat/description` or `fix/description` convention.
3. Submit a pull request with a clear description of changes.

## License

Copyright 2025 Javier Romero romerochavez.javieralejandro@gmail.com

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
