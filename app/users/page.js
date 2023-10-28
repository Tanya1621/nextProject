async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: "force-cache"
    })
    const data = await response.json()

    return data
}

async function UserList() {
    const users = await getUsers();
    return (<div>
        <h1>It is a list of users, friend</h1>
        {users.map((user) => {
            return <h2>{user.name} from {user?.company?.name} </h2>
        })}
    </div>)

}

export default UserList;


