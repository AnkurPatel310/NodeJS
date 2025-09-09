import { listUsers } from "../model/userList.js";
import lodash from 'lodash'
import jsonData from '../data.json' with {type:'json'}

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

export function loadJsonData(req,res){
    res.send(jsonData);
}

export function idWiseData(req,res){
    const id = req.params.id;
    const data = jsonData.filter((u)=>u.id==id)    
    
    if(data.length>0){
        res.send(data);
    }else{
        res.send("id not found");
    }
}