function AllData(){

    const arrayData = React.useContext(UserContext);     // create variable for user context

    return (
        <>
            <div className="container">
                <h1 className="text text-primary text-center ">Bad Bank Data</h1>
                <h6 className="text text-primary text-center">Bad Bank User Account Information</h6>
                <table className="table-striped border-success" >
                    <colgroup className="text-center">
                        <col width="20%"/>
                        <col width="20%"/>
                        <col width="20%"/>
                        <col width="20%"/>
                        <col width="20%"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col" data-field="id"   className="text-primary">Account ID</th>
                        <th scope="col" data-field="name" className="text-primary">Name</th>
                        <th scope="col" data-field="date" className="text-primary">Email</th>
                        <th scope="col" data-field="date" className="text-primary">Password</th>
                        <th scope="col" data-field="date" className="text-primary">Balance</th>
                    </tr>
                    </thead>
                    <tbody id="table-body" >
                        {arrayData.users.map((value, index) => (
                            <tr key={index}>
                                <td className="text-center">{index}</td>
                                <td className="text-left">{value.name}</td>
                                <td className="text-left">{value.email}</td>
                                <td className="text-left">{value.password}</td>
                                <td className="text-left">{value.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}