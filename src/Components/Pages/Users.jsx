import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    return (
        <div>
           
            <h1>total users: {loadedUsers.length}</h1> 
            <div className="overflow-x-auto">
                <table className="table">
                    
                    <thead>
                        <tr>
                            <th>User ID</th>
                            <th>email</th>
                            <th>name</th>
                            <th>photo</th>
                            <th>created at</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                         {
                            loadedUsers.map(user => <tr key={user._id}>
                                <th>{user._id}</th>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td><img className="w-10 rounded-full" src={user.photo} alt="" /></td>
                                <td>{user.createdat}</td>
                                <td>Blue</td>
                            </tr>)
                         }
                    </tbody>
                </table> 
             </div>
        </div>
    );
};

export default Users;