function AllData(){

    const arrayData = React.useContext(UserContext);     // create variable for user context:
    let arrayLength = arrayData.users.length;    // get array length

    console.log(arrayData.users.at(arrayLength-1));

    document.addEventListener('DOMContentLoaded', () => {

        const tableBody = document.getElementById('table-body');

        for (let i = 0; i < arrayLength; i++) {
            const row          = tableBody.insertRow();

            const idCell       = row.insertCell(0);
            const nameCell     = row.insertCell(1);
            const emailCell    = row.insertCell(2);
            const passwordCell = row.insertCell(3);
            const balanceCell  = row.insertCell(4);

            idCell.textContent       = i;
            nameCell.textContent     = arrayData.users.at(i).name;
            emailCell.textContent    = arrayData.users.at(i).email;
            passwordCell.textContent = arrayData.users.at(i).password;
            balanceCell.textContent  = arrayData.users.at(i).balance;

            console.log('Inside DOMContentLoaded');

            console.log(i);
            console.log(arrayData.users.at(i).name);
            console.log(arrayData.users.at(i).email);
            console.log(arrayData.users.at(i).password);
            console.log(arrayData.users.at(i).balance);
        }
    });

    return (
        <>
            <div className="container">
                <h1 className="text text-primary text-center ">Bad Bank Data</h1>
                <h6 className="text text-primary text-center">Bad Bank User Account Information</h6>
                <table className="table-striped border-success">
                    <thead>
                    <tr>
                        <th scope="col" data-field="id">
                            <span className="text-primary">Account ID</span>
                        </th>
                        <th scope="col" data-field="name">
                            <span className="text-primary">Name</span>
                        </th>
                        <th scope="col" data-field="date">
                            <span className="text-primary">Email</span>
                        </th>
                        <th scope="col" data-field="date">
                            <span className="text-primary">Password</span>
                        </th>
                        <th scope="col" data-field="date">
                            <span className="text-primary">Balance</span>
                        </th>
                    </tr>
                    </thead>
                    <tbody id="table-body">
                        {arrayData.users.map((value, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{value.name}</td>
                                <td>{value.email}</td>
                                <td>{value.password}</td>
                                <td>{value.balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}