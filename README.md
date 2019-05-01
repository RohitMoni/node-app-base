# Simple NodeJS base app

Simple Nodejs Application Server using Express, EJS.

Highly recommend using VSCode with this. All the tooling is setup up to work with VSCode well. Other IDEs and text editors can still work (running scripts set up in the tools folder) but it's not as conveniently setup.

## Setting up the app

Needs nodejs and npm installed
Run npm install

Install the recommended VSCode Extensions

For https, need to get and configure the required certificates.
Can run the build task `Setup HTTPS` to create self-signed ones for testing.

For SCSS compilation, watch the `app/scss` folder and output to `app/static/css`.
Can also run the VSCode task to start the live SASS watch tool so it'll always compile changes to those files.

## Running the app

Can be run with command: node app/main.js
If you're using VSCode: Can just debug with the pre-made launch option(s)

By default the NODE_ENV is `development`, and `development.app.config` will be the config file loaded.
You can change this environment variable before running the app to load a different configuration file based on it. 