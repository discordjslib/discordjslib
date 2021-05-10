# Useful

## Types:

- dm - direct message channel  
- category - category channel
- text - text channel
- voice - voice channel
- news - news channel
- store - store channel
- stage - stage channel

## Examples

Find and ban a GuildMember:
```js
const guild = await client.guilds.find('Guild-ID')
guild.members.find('Member-ID').then(member => member.ban('Banned by Discordjslib'))
```
Find and DM User:
```js
const user = await client.users.find('User-ID')
user.dm('Hello World!').then(message => console.log(`Messaged ${user.name}!`))
```
Find, send a message and delete a Channel:
```js
const channel = await client.channels.find('channel-id')
channel.send('Goodbye World!').then(message => message.channel.delete())
```
Find and delete a Role:
```js
const role = await client.roles.find('role-id')
role.delete().then(role => console.log(`Deleted ${role.name}!`))
```


