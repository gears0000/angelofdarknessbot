const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");
const Discord = require("discord.js");



module.exports = {
    //definition
        name: "stok", //komutun ismi
        category: "genel", //komutun kategorisi
        aliases: [], //alternatifler
        cooldown: 5, //gecikme
        usage: "stok <hesap türü>", //kullanışı
        description: "Stok sayısını öğrenirsiniz.", //açıklama

    run: async (client, message, args, user, text, prefix,db) => {
        if(!db.get(args[0].toLowerCase())) return message.channel.send("Hiç yok yakında eklenecektir.");
        if(db.get(args[0].toLowerCase()).length == 0) return message.channel.send("Hiç yok yakında eklenecektir.");
        message.channel.send("Stok : "+db.get(args[0].toLowerCase()).length);
    }
}

//Yeni bir dosya aç dosyaadi.js gibi uzantısı js olsun Sonra yukarıdaki kodu içerisine at gerekli yerleri doldur