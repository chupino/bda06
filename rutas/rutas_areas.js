var mongojs = require('mongojs');

var uri ='mongodb://localhost:27017/EduardoFloresLab02';

var db = mongojs (uri, ["Areas"]);


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
    
    }
}