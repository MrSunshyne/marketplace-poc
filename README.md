# Marketplace PoC

## Background

1. Starter Template : [MrSunshyne/vue-tailwind-boilerplate](https://github.com/mrsunshyne/vue-tailwind-boilerplate)

## Requirements

1. Everything in package.json. `$ npm install` at the project root
2. install `json-server` globally. `$ npm install -g json-server`

## Usage

1. Clone the repository
2. Create an .env file with this content:

   `VUE_APP_BASEURL = "http://localhost:3535"`

3. cd in the `public/api` directory and start the json-server by running

   `$ json-server db.json --watch --port 3535`

4. Run the vue app at the project root using

   `$ npm run serve`

## Stack

- VueJS
- TailwindCSS

## Features

- **A Listing Search Page**
  (which could also be the Home / Landing Page).
- **A Listing detail Page**.
  (Showing more info on a single Listing, refer to list at the end of the readme)
- **A Create Listing Page**

## Specs

A single listing should have these fields

    Title
    Slug
    Description
    Date Online
    Date Offline
    Price
    Currency
    Contact Details
        Mobile
        Email
    Category (One of the following)
        Furniture
        Electronics
        Cars
        Property

And search should have at least the following features.

    Search by string matching in title
    Search by category

## Bonus Features

.. we'll see ..

## Deploy on Netlify (deprecated)

Note : Serving the data from json-server doesn't allow the app to be deployed easily on netlify.
Would have to implement cloud functions.

<!-- # [View Site ](https://marketplace-poc.netlify.app) -->
