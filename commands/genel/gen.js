const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");
const Discord = require("discord.js");



module.exports = {
    //definition
        name: "gen", //komutun ismi
        category: "genel", //komutun kategorisi
        aliases: ["üret"], //alternatifler
        cooldown: 1, //gecikme
        usage: "gen <hesap türü>", //kullanışı
        description: "Rasgele hesap üretilir.", //açıklama

    run: async (client, message, args, user, text, prefix,db) => {
        var liste = db.get(args[0].toLowerCase());
        if(liste.length == 0) return message.channel.send("Şu anda bu türde hiç hesap yok yakın zamanda eklenecektir.");

        var hesap = liste[Math.floor(Math.random()*liste.length)];
        var kadi = hesap.split("&&&&&")[0];
        var sifre = hesap.split("&&&&&")[1];

        message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setTitle("DM'inize bakın ! "));

        message.author.send(new Discord.MessageEmbed().setColor("RED").setTitle("İşte "+args[0]+" Hesabın ; ").setDescription("Kullanıcı adı : ```"+kadi+"```\nŞifre : ```"+sifre+"```")).catch(err=>message.channel.send("DM'iniz kapalı ! "));

        db.pull(args[0].toLowerCase(),hesap);
        
    }
}

//Yeni bir dosya aç dosyaadi.js gibi uzantısı js olsun Sonra yukarıdaki kodu içerisine at gerekli yerleri doldur