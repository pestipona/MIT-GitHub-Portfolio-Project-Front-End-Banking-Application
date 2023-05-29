function Withdraw(){

    const [show, setShow]          = React.useState(true);
    const [status, setStatus]      = React.useState();
    const [withdraw, setWithdraw]  = React.useState();
    const [balance, setBalance]    = React.useState(1000);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 1500);
            return false;
        }
        return true;
    }

    function handleWithdraw() {
        console.log(withdraw, balance);
        if (!validate(withdraw, 'Please provide a monetary amount.')) return;
        setBalance(balance - withdraw);
        setShow(false);
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
            status={status}
            body={show ? (
                <>
                    Balance: ${balance.toFixed(2)}<br/><br/>
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