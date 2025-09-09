export function handleRoute(req,res) {
    res.status(404).render('404');
}

export function handleError(error,req,res,next){
    res.status(error.status || 500).render('500');
}