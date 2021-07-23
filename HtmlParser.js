var ejs=require('ejs')
class HmtlParser{
   static async Parse(table){
    return await ejs.renderFile("./table.ejs",{
      header:table.header,
      rows:table.rows
    })
  }
}
module.exports= HmtlParser