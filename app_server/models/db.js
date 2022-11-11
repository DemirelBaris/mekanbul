var mongoose=require('mongoose');
var dbURI="mongodb+srv://mekan32:mekan123@mekanbul.62dzhgt.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    });

}
process.on("SIGNT",function(){
    kapat("Uygulama kapatıldı",function(){
        process.exit(0)
    });
});
mongoose.connection.on("connected", function(){
    console.log(dbURI+" adresindeki veritabanına bağlandı.");
});
mongoose.connection.on("disconnected", function(){
    console.log(dbURI+" Bağlantı koptu.");
});
mongoose.connection.on("error", function(){
    console.log(dbURI+"BAĞLANTI HATASI");
});

require("./mekansema");