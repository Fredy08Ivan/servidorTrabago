import routerx from "express-promise-router";
import postsController from "../controllers/posts.controller";

const router=routerx();

router.post('/guardar',postsController.addPost);
router.get('/consultar',postsController.listarPost);
router.delete('/eliminar/:id',postsController.eliminarPost);
router.get('/consultarOne/:id',postsController.listarOnePost);
router.put('/actualizar/:id',postsController.updatePost);


export default router;