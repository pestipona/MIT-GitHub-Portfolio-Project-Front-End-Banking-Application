function Login(){

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState();
    const [email, setEmail]       = React.useState();
    const [password, setPassword] = React.useState();
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 1500);
            return false;
        }
        return true;
    }

    function handleLogin() {
        console.log(email, password);
        if (!validate(email, 'Please enter an email')) return;
        if (!validate(password, 'Please enter a password')) return;
        ctx.users.push({email, password});
        setShow(false);
    }

    function clearForm() {
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="warning"
            txtcolor="black"
            header="Login"
            status={status}
            body={show ? (
                <>
                    Email:<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password:<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
            ):(
                <>
                    <h5>Login Successful</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Ok</button>
                </>
            )}
        />
    );
}