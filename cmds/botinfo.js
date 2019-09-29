exports.run = (client, message, args) => {
    const moment = require('moment')
    const Disсord = require('discord.js')
    var embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Название', client.user.username, true)
    .addField('Создатель', client.users.get(client.owner), true)
    .addField('Создан', moment(client.user.createdAt).format('HH:MM DD-MM-YY'), true)
    .addField(`Ping`, `${Math.floor(client.ping)}`, true)
    .addField('Префикс', `${client.prefix}`, true)
    .setThumbnail(client.user.avatarURL)
    .addField('Discord.js', `v${Discord.version}`, true)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
    .setColor('RANDOM')
    message.channel.send(embed)
   }
   exports.help = {
group: 'general',
desc: 'Показывает информацию о боте',
usage: 'g!about',
name: 'about'
 }
