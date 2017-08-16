
module.exports = function(app){

    var listaLivros =  function(req, res){
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.todos(function(err, results){
            res.format({
                html: function(){
                    res.render('produtos/lista', {lista: results});
                },
                json: function(){
                    res.json(results);
                }
            });
        });
        connection.end();
    };

    app.get('/produtos/cadastro', function(req, res){
        res.render('produtos/form')
    });


    app.get('/produtos', listaLivros);

    app.post('/produtos', function(req, res){
        
        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.salvar(produto, function(err, result){
            console.log(err);
            res.redirect('/produtos');
        });
    });
}
