var express = require('express');
var router = express.Router();
var fareas=  require('./rutas_areas.js');
var fcargos= require('./rutas_cargos.js');

// Pagina Principal
router.get('/', c_inicio);

// Opciones principales
router.get('/mantenimientos', c_mantenimientos);
router.get('/procesos' ,c_procesos); 
router.get('/reportes' ,c_reportes);


//Opciones de mantenimiento de cargos
router.get('/m_cargos_listado',fcargos.listado);
router.get('/m_cargos_nuevo', fcargos.nuevo);
router.post('/m_cargos_grabar_nuevo', fcargos.grabar_nuevo);
router.get('/m_cargos_editar/:xid', fcargos.editar);
router.post('/m_cargos_grabar_editar/:xid', fcargos.grabar_editar);
router.get('/m_cargos_eliminar/:xid',fcargos.eliminar);

//opciones de listado de Areas
router.get('/m_areas_listado',fareas.listado);
router.get('/m_areas_editar/:xid',fareas.editar);
router.post('/m_areas_editar_grabar/:xid',fareas.grabar_editar);
router.get('/m_areas_nuevo',fareas.nuevo);
router.post('/m_grabar_areas_nuevo',fareas.agregar_nuevo);
router.get('/m_areas_eliminar/:xid',fareas.eliminar);

function c_inicio (req, res) { 
    res.render('index',{});
}

function c_mantenimientos (req, res) { 
    res.render('mantenimientos',{});
}

function c_procesos(req, res) {

res.send('Procesos');

}

function c_reportes (req, res) {

res.send('Reportes');

} 

module.exports = router;