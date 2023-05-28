function Login(){
    return (
        <Card
            bgcolor="warning"
            txtcolor="black"
            header="Login"
            title="Welcome to the Bank"
            text="You are welcome to use this Bank"
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />
    );
}