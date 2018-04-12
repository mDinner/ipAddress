exports = module.exports = function ( router ) {

  router.get('/', function(req, res) {

    res.render('index', {title:'My IP', name: 'My IP App'});

  });

router.get('/register', (req, res) => {
	res.send('sup?');
})

}
