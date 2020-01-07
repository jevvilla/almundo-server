## Almundo - API

# Overview

This repo contains the server API that exposes two endpoints, a list of Hotels and also the details for each Hotel.

## Developer notes:

The stack used for this project:

- Node.js, express.
- MongoDB was used as database.

## Before we start

Please make sure you have `node`, `npm`, `git`. In case you don't have any of those installed and setup, please go to [nodejs.org](https://nodejs.org/en/) to download and install the **Recommended For Most Users** version, or go [here](https://git-scm.com/downloads); to download `git`.


### This Project

Once the above parts are setup, you can go ahead and clone the repo using the following command in your terminal:
```
git clone https://github.com/jevvilla/almundo-server.git
```

Then go to the project root (project folder), and run the following commands to get the app running:

- `npm i` - Install project dependencies.
- After installing all packages to be able to run the project you have to run `npm start` or `npm run dev` (if you have nodemon installed), after that, a message will appear in your terminal:
```
Listening http://localhost:3030
```
If you can see the message above, you may want to open a browser tab and visit:

- http://localhost:3030/api/hotels - (to get the list of hotels)
- http://localhost:3030/api/hotels/details/[id] -  (to get details of a hotel)
- you can try http://localhost:3030/api/hotels/details/5e11c5f21c9d440000fc4ca3

## 📢 Important
This project has been deployed to Heroku and you can directly visit:
- https://almundo-server-api.herokuapp.com/api/hotels - (get all Hotels)
- https://almundo-server-api.herokuapp.com/api/hotels/details/[id] - (to get a Hotel details)
- Example: https://almundo-server-api.herokuapp.com/api/hotels/details/5e11c6af1c9d440000ce76a5