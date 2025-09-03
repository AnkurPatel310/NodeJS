function userForm(req,res) {
    res.write(`
        <form action="/submit" method="post">
            <input type="text" placeholder="enter your name" name="username">
            <input type="password" placeholder="enter your password" name="password">
            <br>        
            <button type="submit">Submit</button>
        </form>
    `);
}

module.exports=userForm;