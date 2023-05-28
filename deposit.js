function Deposit(){
    return (
        <Card
            bgcolor="success"
            txtcolor="black"
            header="Deposit"
            title="Welcome to the Bank"
            text="You are welcome to use this Bank"
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />
    );
}