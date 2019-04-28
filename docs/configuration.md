# App Configuration

## Overview

The app server looks for config files in the `config` folder.

By default we have a separate configuration file for development and for production, so that a potential production ready build doesn't have visibility on or access to development configurations.

Configuration files are `.json` format, and are split up into multiple categories and sub-categories within.

## Categories

### Development Configuration
```
config
└─ server
```
### Production Configuration
```
config
└─ server
```

## Config options descriptions (A-Z)

```
server {
    http {            
        "enabled" - true | false
            Determines whether the app creates an http server listener.

        "port" - number
            The port number the http server listens to.
    },
    https {
        "cert" - filepath
            The path to the certificate file used for https encryption.
        
        "enabled" - true | false
            Determines whether the app creates an https server listener.

        "key" - filepath
            The path to the key file used for https encryption.
        
        "port" - number
            The port number the https server listens to.
        }
    }
}
```