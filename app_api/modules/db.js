var mongoose = require( 'mongoose' );
var dbURl =  'mongodb+srv://mekan32:384367@mekanbul.beh4quw.mongodb.net/?retryWrites=true&w=majority'; 
mongoose.connect(dbURI);
mongoose.connection.on("connected",function(){
    console.log("Mongoose "+dbURl+" adresindeki veritabanına bağlanıldı!\n");
});
mongoose.connection.on("error",function(err){
    console.log("Bağlantı hatası\n:"+err);
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi!\n");
});
process.on("SIGINT", function(){
    mongoose.connection.close();
    console.log("Bağlantı Kapatıldı");
    process.exit(0);
});

require("./venue");