import axios from "axios"
import { useState } from "react"

const url = `https://jsonplaceholder.typicode.com/users`
let componentYarandimi = false
const Users = () => {
    const [users, setUsers] = useState([])

    if (componentYarandimi !== true) {
        axios.get(url).then(({ data }) => {
            setUsers(data);
            componentYarandimi = true
            // console.log();
        })
    }


    return (
        <>
            <h1>salam</h1>
        </>
    )
}

export default Users