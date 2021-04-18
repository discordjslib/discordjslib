# FAQ:

## What is discordjslib?

- A [Node.js](https://nodejs.org/en/) library which interacts with the [Discord API](https://discord.com/developers/docs/intro)

## Why is discordjslib different to other libraries?
- discordjslib improves performance substantially because it does not cache any data at startup. This means that once it connects to Discords [gateway](https://discord.com/developers/docs/topics/gateway) no data is saved. Unlike other libraries, this makes discordjslib much faster and consumes less resources and processing power.

- users are represented as both guildmembers and users. As a result, this means that you do not have to worry about the specific user, guildmember properties and methods.

- simple and easy to use - example: [Click Here](https://github.com/discordjslib/discordjslib#discordjslib)

- well documented - many libraries are not!