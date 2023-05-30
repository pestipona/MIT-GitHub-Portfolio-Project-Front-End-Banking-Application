function Deposit(){

    const [show, setShow]         = React.useState(true);
    const [deposit, setDeposit]   = React.useState('');
    const [user, setUser]         = React.useState('');
    const [balance, setBalance]   = React.useState(0);
    const ctx = React.useContext(UserContext);

    let arrayLength = ctx.users.length;
    let currentIndex = arrayLength - 1;
    let currentUser = ctx.users.at(currentIndex).name;

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 1500);
            return false;
        }
        return true;
    }

    function handleDeposit() {
        if (!validate(deposit, 'Please provide a monetary amount.')) return;

        let stringBalance = parseFloat(balance).toFixed(2);
        let numBalance = parseFloat(stringBalance);

        let stringDeposit = parseFloat(deposit).toFixed(2);
        let numDeposit = parseFloat(stringDeposit);

        let newBalance = numBalance + numDeposit;
        newBalance = parseFloat(newBalance).toFixed(2);

        setBalance(newBalance);
        setShow(false);

        console.log(`Deposit Amount: $${deposit}`, `New Balance: $${newBalance}`);
        //let currentIndex = ctx.users.values();
        //ctx.users[currentIndex].balance = newBalance;

        ctx.users.at(currentIndex).balance = newBalance;

        console.log(ctx.users);
        console.log(ctx.users.values());
        console.log(ctx.users.at(0));
        console.log(ctx.users.at(0).name);
        console.log(ctx.users.at(0).email);
        console.log(ctx.users.at(0).password);
        console.log(ctx.users.at(0).balance);
        let arrayLength = ctx.users.length;
        console.log(arrayLength);
        console.log(ctx.users.at(1));
        console.log(ctx.users.at(2));
        console.log(ctx.users.at(3));
    }

    function clearForm() {
        setDeposit('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="success"
            txtcolor="black"
            header="Deposit"
            body={show ? (
                <>
                    Balance: ${balance}<br/><br/>
                    Deposit Amount:<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" disabled={deposit <= 0} onClick={handleDeposit}>Deposit</button>
                </>
            ):(
                <>
                    <h5>Deposit Successful</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
                </>
            )}
        />
    );
}