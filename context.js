const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

// card component
function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-title">{props.text}</p>)}
                {props.body}
                {props.status && (<div id="createStatus">{props.status}</div>)}
            </div>
        </div>
    );
}

function Table() {

    return(
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