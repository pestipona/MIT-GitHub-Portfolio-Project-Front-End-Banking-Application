function Balance(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>Balance:<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
}