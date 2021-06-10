const router = require('express').Router();

const { addComment, removeComment } = require('../../controllers/comment-controller');

const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router
    .use('/comments', commentRoutes);

router  
    .use('/pizzas', pizzaRoutes);

router
    .route('/:pizzaId')
    .post(addComment);

router
    .route('/:pizzaId/:commentId')
    .delete(removeComment);




module.exports = router;