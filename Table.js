class Table{
  constructor(array){
    this.header=array[0]
    array.shift()
    this.rows=array
  }

//Campos virtuais são atributos que podemos colocar na classe, mas na verdade eles são métodos que retornam dados

//O get transforma o metodo em um atributo. Sempre que colocarmos um get em alguma coisa será necessário retornar alguma coisa
get RowCount(){
  return this.rows.length
}
get ColumnCount(){
  return this.header.length
}
}
module.exports=Table