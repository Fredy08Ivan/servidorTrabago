import routerx from 'express-promise-router';
import personaController from '../controllers/personas.controller';


const router=routerx();

router.post('/guardar',personaController.addPersona);
router.get('/consultar',personaController.listarPersonas);
router.delete('/eliminar/:id',personaController.eliminarPersona);
router.get('/consultarOne/:id',personaController.listarOnePersona);
router.put('/actualizar/:id',personaController.updatePersona);

export default router;