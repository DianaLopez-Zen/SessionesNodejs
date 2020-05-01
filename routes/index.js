const { Router} = require('express');
const router = Router();


router.get('/', (req, res) => {
	res.render('index');
});

router.post('/registrar', (req,res) =>{
	console.log(req.body)
	//req.flash('user', req.body);
	req.flash('success', 'now your are registered');
	res.redirect("/products");
});

router.get('/profiles', (req,res) =>{
	
	res.render("profiles");
});

router.get('/products', (req,res) =>{
	
	res.render("products");
});



module.exports = router;