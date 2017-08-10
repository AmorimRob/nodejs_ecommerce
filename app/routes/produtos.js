
module.exports = function(app){

    var listaLivros =  function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.todos(function(err, results){
            res.render('produtos/lista', {lista: results});
        });
        connection.end();
    };

    app.get('/produtos/cadastro', function(req, res){
        res.render('produtos/form')
    });

    app.get('/produtos', listaLivros);

    app.post('/produtos', function(req, res){
        
        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.salvar(produto, function(err, result){
            res.redirect('/produtos');
        });
    });
}
