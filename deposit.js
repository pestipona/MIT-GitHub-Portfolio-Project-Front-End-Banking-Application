function Deposit(){

    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState();
    const [deposit, setDeposit]   = React.useState('');
    const [balance, setBalance]   = React.useState(1000);
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 1500);
            return false;
        }
        return true;
    }

    function handleDeposit() {
        console.log(deposit, balance);
        if (!validate(deposit, 'Please provide a monetary amount.')) return;

        let currentBalance = parseFloat(balance).toFixed(2);
        let parsedBalance = parseFloat(currentBalance);

        let parsedDeposit = parseFloat(deposit).toFixed(2);
        parsedDeposit = parseFloat(parsedDeposit);

        let newBalance = parsedBalance + parsedDeposit;
        newBalance = parseFloat(newBalance).toFixed(2);

        setBalance(newBalance);
        setShow(false);
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
            status={status}
            body={show ? (
                <>
                    Balance: ${balance}<br/><br/>
                    Deposit Amount:<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
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