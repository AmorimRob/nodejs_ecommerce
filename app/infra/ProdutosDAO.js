function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.todos =  function(callback){
    this._connection.query('select * from livros', callback)
}

ProdutosDAO.prototype.salvar = function(produto, callback){
    this._connection.query('insert into livros set ?', produto, callback);
}

module.exports = function(){
        return ProdutosDAO;
}   
