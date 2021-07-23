const fs=require('fs')
const util=require('util')

// var novaFuncaoComPromise= util.promisify(funcaoVelhaComCallback)

class Reader{
  constructor(){
    //Transforma o readFile em uma promise e salva a promise no reader
    this.reader=util.promisify(fs.readFile)
  }

  //Read(caminho do arquivo)
  async Read(filepath){
    //readFile é assincrona, mas não é uma promise, ou seja, não dá para usar async e await com ela para retornar dados.Para resolver esse problema é necessário usar o Promisify
    try{
     return await this.reader(filepath,"utf8")
    }catch(err){
      return undefined
    }
  }
}
module.exports=Reader