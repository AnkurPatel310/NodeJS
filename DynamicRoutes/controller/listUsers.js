import { listUsers } from "../model/userList.js";
import lodash from 'lodash'

export function listUser(req, res) {
    const data = listUsers();   

    const formattedUsers = data.map(u => lodash.capitalize(u));
    res.render('home', { users: formattedUsers });
}

export function userPortfolio(req, res) {
    const user = req.params.name.toLowerCase();
    const userList = listUsers();

    if (userList.includes(user)) {
        const formattedName = lodash.capitalize(user);
        res.render('user', { name: formattedName });
    } else {
        res.render('userNotFound');
    }
}