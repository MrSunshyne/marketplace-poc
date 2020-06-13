# Marketplace PoC

## Background

Starter Template : [MrSunshyne/vue-tailwind-boilerplate](https://github.com/mrsunshyne/vue-tailwind-boilerplate)

## Stack

- VueJS 2
- TailwindCSS @latest
- Vee Validate @latest

## Usage

There are two ways to run this project.

1. [Manual](#1-manual-usage)
2. [Docker](#2-docker-compose)

> Note: I added 1 second delay in the json-server intentionally so that intermediate states are visible.

### 1. Manual Usage

#### Pre requisites

1. nodejs v12+ & npm v6+
2. json-server `$ npm install -g json-server`

#### Installation Steps

1. Clone the repository
2. Install project depenencies using `$ npm install` in the project directory (/app)

3. cd in the `api` directory and start the json-server with a 1000s delay for theatrical purposes by running

   `$ json-server db.json --watch --port 3535 --delay 1000`

4. Run the vue app at the project root using

   `$ npm run serve`

### 2. Docker Compose

You need to have docker and docker-compose installed

Run `$ docker-compose up -d`

Visit http://localhost:8081/ to view the app

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

- ✅ Extend the search to add Filtering for Price
- ✅ Sign Up / Sign In Pages
- ✅ Turn the Listing Create into a 2 Step Wizard.
- ✅ Implement PurgeCSS.
- ✅ Docker / docker-compose Setup
- ✅ Automated Tests
