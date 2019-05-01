# Simple NodeJS base app

Simple Nodejs Application Server using Express, EJS.

## Setting up the app

Needs nodejs and npm installed
Run npm install

For https, need to get and configure the required certificates.
Can run the build task `Setup HTTPS` to create self-signed ones for testing.

## Running the app

Can be run with command: node app/main.js
If you're using VSCode: Can just debug with the pre-made launch option(s)

By default the NODE_ENV is `development`, and `development.app.config` will be the config file loaded.
You can change this environment variable before running the app to load a different configuration file based on it. 