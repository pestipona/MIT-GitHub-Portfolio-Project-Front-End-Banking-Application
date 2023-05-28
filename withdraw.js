function Withdraw(){

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState();
    const [withdraw, setWithdraw]   = React.useState();
    const [balance, setBalance]   = React.useState();
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleWithdraw() {
        console.log(withdraw, balance);
        if (!validate(withdraw, 'Please provide a monetary amount.')) return;
        if (!validate(balance, 'balance')) return;
        ctx.users.push({withdraw, balance});
        setShow(false);
    }

    function clearForm() {
        setWithdraw('');
        setBalance('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="info"
            header="Withdraw"
            status={status}
            body={show ? (
                <>
                    Balance:<br/>
                    <input type="input" className="form-control" id="balance" placeholder="Balance Amount" value={balance} onChange={e => setBalance(e.currentTarget.value)}/><br/>
                    Withdraw Amount:<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
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