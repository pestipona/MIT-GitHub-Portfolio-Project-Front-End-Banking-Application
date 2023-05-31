function Withdraw(){

    // create variable for user context:
    const ctx = React.useContext(UserContext);

    // get variables for current user:
    let arrayLength = ctx.users.length;     // get array length
    let currentIndex = arrayLength - 1;     // get index of current user
    let currentUser = ctx.users.at(currentIndex).name;  // get name of current user
    let currentBalance = ctx.users.at(currentIndex).balance // get balance of current user

    console.log(`current user : ${currentUser}`)
    console.log(`current balance : ${currentBalance}`)

    // create react state variables
    const [show, setShow]          = React.useState(true);
    const [withdraw, setWithdraw]  = React.useState('');
    const [user, setUser]         = React.useState(currentUser);
    const [balance, setBalance]    = React.useState(currentBalance);

    // form validation
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 1500);
            return false;
        }
        return true;
    }

    function handleWithdraw() {
        if (!validate(withdraw, 'Please provide a monetary amount.')) return;

        let stringBalance = parseFloat(balance).toFixed(2);
        let numBalance = parseFloat(stringBalance);

        let stringWithdraw = parseFloat(withdraw).toFixed(2);
        let numWithdraw = parseFloat(stringWithdraw);

        let newBalance = numBalance - numWithdraw;
        newBalance = parseFloat(newBalance).toFixed(2);

        setBalance(newBalance);
        setShow(false);

        // update current user's balance
        ctx.users.at(currentIndex).balance = newBalance;

        console.log(`Withdraw Amount: $${withdraw}`, `New Balance: $${newBalance}`);
    }

    function clearForm() {
        setWithdraw('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            txtcolor="black"
            header="Withdraw"
            body={show ? (
                <>
                    Balance: ${balance}<br/><br/>
                    Withdraw Amount:<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" disabled={withdraw <= 0} onClick={handleWithdraw}>Withdraw</button>
                </>
            ):(
                <>
                    <h5>Withdraw Successful</h5>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Request another withdrawal</button>
                </>
            )}
        />
    );
}