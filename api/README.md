# api

This is the API that receives requests to generate AI responses, calls the appropriate backend model and then responds back to the user. It records all these interactions into a local DB.

## Installation

Install the application dependencies by running:

```sh
npm install
```

## Development

Create your own environment by copying `.env_example` to `.env` and putting in the correct URL for your TGI server. Start the application in development mode by running:

```sh
npm start
```

## Production

Build the application in production mode by running:

TODO