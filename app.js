var sys=require("sys");
var fs = require("fs");
var zg2uni = require("./zg2uni");
var start_time= new Date();

fs.readFile(process.argv[2], function(err, data){
 if(err==null)
 {
    data=""+data;
    fs.writeFile("output.txt",zg2uni.convert(data), function(err){
        if (err) console.log(err);
        var end_time=new Date();
        var total=end_time-start_time;
        total=total/1000;
        sys.puts(total+" seconds");
    });
 }
 else
 {
    sys.puts("Couldn't find file :"+process.argv[2]);
 }
});
