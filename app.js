const Reader= require("./Reader")
const Processor=require("./Processor")
const Table=require("./Table")
const HtmlParser=require("./HtmlParser")
const Writer=require("./Writer")
const PDFWriter=require("./PDFWriter")

var escritor=new Writer()
var leitor=new Reader()

async function main(){
  var dadosBrutos= await leitor.Read("./users.csv")
  var dadosProcessados= Processor.Process(dadosBrutos)

  var usuarios=new Table(dadosProcessados)

  var html=await HtmlParser.Parse(usuarios)

  escritor.Write(`${Date.now()}.html`,html)
  PDFWriter.WritePDF(`${Date.now()}.PDF`,html)
  
  /*
  usuarios.rows.push(["João","Formação PHP","PHP","32"])
  console.log(usuarios.header)
  console.log(usuarios.rows)
  console.log(usuarios.RowCount)
  console.log(usuarios.ColumnCount)
  */

}

main()