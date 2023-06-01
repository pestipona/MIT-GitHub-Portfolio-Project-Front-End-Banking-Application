function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>All Data:<br/>
            {JSON.stringify(ctx)}<br/>
            <table className="table table-striped table-bordered">
                <thead className="bg-primary">
                <tr>
                    <th scope="col">Account No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Balance</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>$1000</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>$3000</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>$5000</td>
                </tr>
                </tbody>
            </table>
        </h1>

    );
}