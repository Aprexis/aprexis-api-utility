# aprexis-api-utility
This module provides access to the Aprexis API, and helpers to read and manipulate the data models provided by the API.

The module is published as @aprexis/aprexis-api-utility.

## Usage

To be written.

## Development
To build the aprexis-api-utility module, you will need:

  - `npm`
  - `yarn`
  - an account on https://www.npmjs.com/ with access to the `aprexis` organization

To create a new version of the module, perform the following:

  1 Make your code changes using your preferred editor
  2 Commit and push your changes to `github`
  3 Build the module using `yarn`
  4 Update the version using `npm`
  5 Push the build and version changes to `github`
  6 Publish the new version using `npm`

### NPM
`npm` is used to update the version and to publish the module when you've updated it.

### YARN
`yarn` is used to maintain the packages used by the code and to build a new version of the module when the code is updated.

### NPM.COM Account
The account on  https://www.npmjs.com/ is used to publish the module. You will need a way to generate a one-time password, such as Google authenticator.

### Build the module
Run the command:

`yarn build`

### Update the module version
Run the command:

`npm version <version-part>`

Where `<version_part>` can be one of 'major', 'minor', or 'patch'. The version number is `major.minor.patch`

`patch` increase the patch number.
`minor` increases the minor number and sets patch to 0.
`major` increases the major number and sets minor and patch to 0.

# Publish the module
Run the command:

`npm publish --public`

You will be challenged for the one-time password.
