class Processor{
  static Process(data){
    var a = data.split("\r\n")
    var rows=[]

    a.forEach(row => {
      rows.push(row.split(","))
    });
    return rows
  }
}
module.exports= Processor