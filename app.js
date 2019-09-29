
var fs = require("fs");
var rabbit = require("./rabbit.js");
var start_time= new Date();

fs.readFile(process.argv[2], function(err, data){
 if(err==null)
 {
    data=""+data;
    fs.writeFile("output.txt",rabbit.zg2uni(data), function(err){
        if (err) console.log(err);
        var end_time=new Date();
        var total=end_time-start_time;
        total=total/1000;
        console.log(total+" seconds");
    });
 }
 else
 {
   console.log("Couldn't find file :"+process.argv[2]);
 }
});
