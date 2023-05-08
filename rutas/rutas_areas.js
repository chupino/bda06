var mongojs = require('mongojs');
const { grabar_editar } = require('./rutas_cargos');

var uri ='mongodb://localhost:27017/MauricioEscalanteLab02';

var db = mongojs (uri, ["Areas"]);
var ObjectId = require('mongodb').ObjectId;


function areas_listado (req, res) {

    db.Areas.find().sort({Nombre:1}, function(err, records) {

    if (err) {

        console.log('Error al acceder a la base de datos.'); 
        return;

    }

    res.render('m_areas_listado', {records: records});
    console.log(records);
});

}


module.exports = {

listado: function (req, res) { 
    areas_listado (req, res);
    
    },
editar:
    function (req, res) { 
        var xid = new ObjectId(req.params.xid);
        console.log("id: "+xid);
        db.Areas.find({_id:xid}, function(err, records) {
        if (err) {
        console.log('Error al acceder a la base de datos.'); 
        res.end();
        return;
        } 
        console.log("hola mundio");
        console.log(records[0]);
        res.render('m_areas_editar', {area: records[0]});
        
        });
        
    },
grabar_editar: 
    function (req,res){
        var xid=new ObjectId(req.params.xid);
        var nombre=req.body.xnom;
        var estado=req.body.xest;
        var abreviatura=req.body.xabr;
        console.log("id proceso:"+xid);
        db.Areas.update({_id:xid}, {$set: {Nombre: nombre, Estado: estado, Abreviatura: abreviatura}}, function(err, doc) {
            if (err) {
                console.log('Error al acceder a la base de datos.'); 
                res.end();
                return;
            } 
        res.redirect('/m_areas_listado');
        })

    },
nuevo:
function(req,res) {
    res.render('m_areas_nuevo',{});
},
agregar_nuevo:
function(req,res){
    var xnom = req.body['xnom'];

    var xest = req.body['xest'];

    var xabr = req.body['xabr'];

    db.Areas.insert( {Nombre: xnom, Estado: xest, Abreviatura: xabr}, function() { 
        res.redirect('/m_areas_listado');

    });
},
eliminar:
function(req,res){
    var xid=new ObjectId(req.params.xid);
    db.Areas.remove({_id:xid}, function() { 
        res.redirect('/m_areas_listado');

});
}
}