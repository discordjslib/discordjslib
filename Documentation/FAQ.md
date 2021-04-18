# FAQ:

## What is discordjslib?

- A [Node.js](https://nodejs.org/en/) library which interacts with the [Discord API](https://discord.com/developers/docs/intro)

## What is the performance difference?
- discordjslib improves performance substantially because it does not cache any data at startup. This means that once it connects to Discords [gateway]() no data is saved. Unlike other libraries, this makes discordjslib much faster and consumes less resources and processing power.