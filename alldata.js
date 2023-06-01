function AllData(){

    function TableComponent() {
        return (
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
                    <tbody id="table-body"></tbody>
                </table>
            </div>
        );
    }


    const ctx = React.useContext(UserContext);  // create variable for user context:
    let arrayLength = ctx.users.length;    // get array length



    document.addEventListener('DOMContentLoaded', () => {
        const tableBody = document.getElementById('table-body');

        for (let i = 0; i < arrayLength; i++) {
            const row = tableBody.insertRow();
            const idCell = row.insertCell(0);
            const nameCell = row.insertCell(1);
            const emailCell = row.insertCell(2);
            const passwordCell = row.insertCell(3);
            const balanceCell = row.insertCell(4);

            idCell.textContent = i;
            nameCell.textContent = ctx.users.at(i).name;
            emailCell.textContent = ctx.users.at(i).email;
            passwordCell.textContent = ctx.users.at(i).password;
            balanceCell.textContent = ctx.users.at(i).balance;
        }
    });

    return (
        <TableComponent/>
    );
}