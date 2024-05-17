# FAQ:

## What is Discordjslib?

- A [Node.js](https://nodejs.org/en/) library which interacts with the [Discord API](https://discord.com/developers/docs/intro).
## Why is Discordjslib different to other libraries?
- Discordjslib improves performance substantially because it does not cache any data on startup, read more about this below.

- It is also incredibly simple and easy to use: [example here](https://github.com/discordjslib/discordjslib/blob/main/Documentation/Welcome.md#example).

## How does Discordjslib handle real-time data fetching?
- Discordjslib fetches data from the Discord API in real-time with each request, ensuring accuracy for your applications. 

- Once the library connects to Discord's [gateway](https://discord.com/developers/docs/topics/gateway) very little data is stored. Unlike other libraries, this makes Discordjslib much faster and consumes less resources and processing power. However, this means that it does make many API calls, but don't worry - the library makes sure to avoid ratelimits to prevent API abuse.

## Can Discordjslib handle complex bot functionalities?
- While Discordjslib focuses on simplicity, it is still capable of handling a wide range of bot functionalities, with more features being implemented in the near future.

