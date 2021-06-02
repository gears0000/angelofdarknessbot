const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const config = require("../../config.json");
const Discord = require("discord.js");




module.exports = {
    //definition
        name: "ekle", //komutun ismi
        category: "genel", //komutun kategorisi
        aliases: ["add"], //alternatifler
        cooldown: 5, //gecikme
        usage: "ekle <hesap türü> <kullanıcı adı> <şifre>", //kullanışı
        description: "Hesap eklersiniz", //açıklama

    run: async (client, message, args, user, text, prefix,db) => {
        if(message.author.id != "405352176098213888" && message.author.id != "307502380864372738") return message.channel.send("Bu komutu kullanamazsın ! ");
        var tür = args[0].toLowerCase();
        var kadi = args[1];
        var sifre = args[2];

        if(!tür || !kadi || !sifre) return message.channel.send("Doğru kullanım : `"+prefix+"ekle <hesap türü> <kullanıcı adı> <şifre>`");

        db.push(tür,`${kadi}&&&&&${sifre}`);

        message.channel.send("Eklendi");
    }
}

//Yeni bir dosya aç dosyaadi.js gibi uzantısı js olsun Sonra yukarıdaki kodu içerisine at gerekli yerleri doldur