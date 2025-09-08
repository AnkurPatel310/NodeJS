import { userList } from "../model/userData.js";

export function controlUsers(req, res) {
    const data = userList();
    res.render('listUser', { users: data })
}

export function landingPage(req,res) {
    res.render('home')
}

export function handleRoute(req,res) {
    res.status(404).render('404');
}

export function handleError(error,req,res,next){
    res.status(error.status || 500).render('500');
}