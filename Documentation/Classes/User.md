A User represents both a GuildMember and a regular User
(which means that you don't have to worry about specific GuildMember properties)

Properties:
`.id` returns a snowflake - [String](https://javascript.info/types#string)
`.username` returns [String](https://javascript.info/types#string)
`.discriminator` returns [Number](https://javascript.info/types#number)
`.tag` a Discord mention - returns [String](https://javascript.info/types#string)
`.avatar` returns [String](https://javascript.info/types#string)
`.bot` returns [Boolean](https://javascript.info/types#boolean-logical-type)
`system` whether  boolean the user is an Official Discord System user (part of the urgent message system) returns [String](https://javascript.info/types#string)
`.2fa` if the user has 2 factor authentication enabled - returns [Boolean](https://javascript.info/types#boolean-logical-type)
`.flags` [Click Here for Examples](google.com) - returns [String](https://javascript.info/types#string)


Methods: 
`.dm` returns [Object](https://javascript.info/object)
`.ban` returns [Object](https://javascript.info/object)