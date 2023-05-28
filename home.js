function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="BadBank Landing Page"
            title="Welcome to the Bank"
            text="You are welcome to use this Bank"
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />
    );
}