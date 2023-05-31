function Home(){
    return (
        <Card
            bgcolor="primary"
            txtcolor="white"
            header="BadBank"
            title="Welcome to the Bad Bank"
            text="For all your banking needs."
            body={(<img src="bank.png" className="img-fluid" alt="responsive image"/>)}
        />
    );
}