# Marketplace PoC

## Background

1. Starter Template : [MrSunshyne/vue-tailwind-boilerplate](https://github.com/mrsunshyne/vue-tailwind-boilerplate)

## Pre requisites

1. nodejs & npm
2. json-server `$ npm install -g json-server`

## Usage

1. Clone the repository
2. Install project depenencies using `$ npm install` in the project directory

3. cd in the `api` directory and start the json-server with a 1000s delay for theatrical purposes by running

   `$ json-server db.json --watch --port 3535 --delay 1000`

4. Run the vue app at the project root using

   `$ npm run serve`

## Stack

- VueJS
- TailwindCSS
- Vee Validate

## Features Requested

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

- Extend the search to add Filtering for Price
- Sign Up / Sign In Pages for User Creation
- Turn the Listing Create into a 2 Step Wizard.
- Implement PurgeCSS.

## Deploy on Netlify (deprecated)

Note : Serving the data from json-server doesn't allow the app to be deployed easily on netlify.
Would have to implement cloud functions.

<!-- # [View Site ](https://marketplace-poc.netlify.app) -->
