# Description

This is a simple project to test [Astro](https://astro.build)
It shows a grid of the launches from SpaceX using its v4 [API](https://docs.spacexdata.com/)
(https://api.spacexdata.com/v5/launches)


In addition it uses [TailwindCSS](https://tailwindcss.com/) for styling


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |



## Paths

We can use the static paths with small webs by adding the next function creating the possible paths, so Astro creates all this paths on the build time.

```js
export async function getStaticPaths()  {
  //call external api to get all ids
  const launches = await getLatestLaunches()

  return launches.map(launch => {
    return {
      params: {
        id: launch.id
      }
    }
  })
}
```


For a most dynamic and big project there is the posibility of using the [server side rendering](https://docs.astro.build/es/guides/server-side-rendering/) it can be used as hybrid if we want to use the static paths and the server side rendering in different parts.


**In our case, for learning purposes, we are using hybrid and declaring when we want to use the server side rendering.**