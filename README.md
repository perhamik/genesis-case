# Genesis Case

Case requirements defined [here](https://mixolydian-polonium-8c0.notion.site/Front-End-School-2-0-c0a2ae89311645e2bdd48b770868ba09).

## Getting Started

> **Note:** To simplify local deployment file .env is removed from .gitignore

### Cloning the repo

```sh
git clone git@github.com:perhamik/genesis-case.git perhamik-genesis-case && cd perhamik-genesis-case
```

First, install dependencies and run development server:

```bash
bun install && bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```bash
src/
│
├─── api/
│     └── index.ts #contains api requests and related methods
│
├─── components/
│     │── CourseCard.tsx #includes RatingStars as sub-component, CourseCard is used on Home page
│     │── Header.tsx
│     └── PaginationCourse.tsx #navigation between pages on Home page
│
├─── context/
│     └── index.tsx #App Context Provider
│
├─── layout/
│     │── course.tsx #Course page
│     │── index.tsx  #core layout (with context)
│     └── list.tsx #used on Home page, contains Course Cards
│
├─── pages/
│     │── course/
│     │     └── [...id].tsx #dynamic route to catch all path
│     │
│     │── _app.tsx #custom App
│     │── _document.tsx #custom Document
│     │── 404.tsx #custom Error Page
│     └── index.tsx #Home page
│
├─── types/
│     │── api.ts #core types provided by the API
│     └── index.ts #used for import from single point
│

```

## More info

Project uses [Bun]() runtime. Bun ships as a single executable that can be installed a few different ways.

Windows users — Bun does not currently provide a native Windows build. We're working on this; progress can be tracked at [this issue](https://github.com/oven-sh/bun/issues/43). In the meantime, use one of the installation methods below for Windows Subsystem for Linux.

Linux users — Kernel version 5.6 or higher is strongly recommended, but the minimum is 5.1.

Native:

```sh
curl -fsSL https://bun.sh/install | bash
```

npm

```sh
npm install -g bun
```

Homebrew

```sh
brew tap oven-sh/bun # for macOS and Linux
brew install bun
```

Docker

```sh
docker pull oven/bun
docker run --rm --init --ulimit memlock=-1:-1 oven/bun
```

proto

```sh
proto install bun
```
