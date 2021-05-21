# FAQ:

## What is Discordjslib?

- A [Node.js](https://nodejs.org/en/) library which interacts with the [Discord API](https://discord.com/developers/docs/intro)

## Why is Discordjslib different to other libraries?

- Discordjslib improves performance substantially because, by default, it does not cache any data on startup. This means that once it connects to Discord's [gateway](https://discord.com/developers/docs/topics/gateway) no data is saved. Unlike other libraries, this makes discordjslib much faster and consumes less resources and processing power. However, if you want data to be cached, you can enable them for individual structures - read more [here]()

- Simple and easy to use - example: [click here](https://github.com/discordjslib/discordjslib#discordjslib)

- Well documented - many libraries are not!
