# Simple NodeJS base app

Simple Nodejs Application Server using Express, EJS.

## Setting up the app

Needs nodejs and npm installed
Run npm install

## Running the app

Can be run with command: node app/main.js
If you're using VSCode: Can just debug with the pre-made launch option(s)

By default the NODE_ENV is `development`, and `development.app.config` will be the config file loaded.
You can change this environment variable before running the app to load a different configuration file based on it. 

To start the https server (enabled by default) you'll need the required security certificate / key. To quickly generate a self-signed cert and key, run the Build task `Build HTTPS Certs (Self Signed)` or run the script manually in `tools/scripts/setup_https`.

## Things to add:

1. Tests
2. Documentation
3. Requirements
4. Tooling for setup
5. Docker stuff
6. Better logging