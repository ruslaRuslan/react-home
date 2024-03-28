import axios from "axios"
import { useState } from "react"

const url = `https://jsonplaceholder.typicode.com/users`
// let componentYarandimi = false
// const Users = () => {
//     const [users, setUsers] = useState([])

//     if (componentYarandimi !== true) {
//         axios.get(url).then(({ data }) => {
//             setUsers(data);
//             componentYarandimi = true
//             // console.log();
//         })
//     }


//     return (
//         <>
//             <h1>salam</h1>
//         </>
//     )
// }

// export default Users

// --------------------------------------------------------------------------------------------------------------

// let componentYarandimi = false
// const Users = () => {
//     const [users, setUsers] = useState([])

//     if (componentYarandimi === false) {
//         axios.get(url).then(({ data }) => {
//             setUsers(data);
//             componentYarandimi = true
//             // console.log();
//         })
//     }


//     return (
//         <>
//             {
//                 users.map((user) => {
//                     return <div key={user.id} >
//                         <h1>{user.username}</h1>
//                         <p>{user.name}</p>

//                     </div>
//                 })
//             }
//         </>
//     )
// }

// export default Users


// --------------------------------------------------------------------------------------------------------------

// let componentYarandimi = false
// const Users = () => {
//     const [users, setUsers] = useState([])

//     if (componentYarandimi === false) {
//         axios.get(url).then(({ data }) => {
//             setUsers(data);
//             componentYarandimi = true

//         })
//     }


//     return (
//         <>
//             {
//                 users.map((user) =>
//                 ( <div key={user.id} >
//                     <h1>{user.username}</h1>
//                     <p>{user.name}</p>

//                 </div>)
//                 )
//             }
//         </>
//     )
// }

// export default Users

// --------------------------------------------------------------------------------------------------------------


// let componentYarandimi = false
// const Users = () => {
//     const [users, setUsers] = useState([])

//     if (componentYarandimi === false) {
//         axios.get(url).then(({ data }) => {
//             setUsers(data);
//             componentYarandimi = true

//         })
//     }


//     return (
//         <>
//             {
//                 users.map((user) => <div key={user.id} >

//                     <h1> <button onClick={() => setUsers(

//                         users.filter((_user) => _user.id !== user.id)

//                     )}>

//                         x</button>
//                         {user.username}
//                     </h1>


//                 </div>
//                 )
//             }
//         </>
//     )
// }

// export default Users

// --------------------------------------------------------------------------------------------------------------


// let componentYarandimi = false
// const Users = () => {
//     const [users, setUsers] = useState([])

//     if (componentYarandimi === false) {
//         axios.get(url).then(({ data }) => {
//             setUsers(data);
//             componentYarandimi = true

//         })
//     }


//     return (
//         <>
//             {
//                 users.map((user) => <div key={user.id} >

//                     <h1>
//                         <button onClick={() => setUsers(users.filter((_user) => _user.id !== user.id))}>
//                             x</button>
//                         {user.username}
//                     </h1>


//                 </div>
//                 )
//             }
//         </>
//     )
// }

// export default Users

// --------------------------------------------------------------------------------------------------------------

import "./index.css"
let componentYarandimi = false

const Users = () => {
    const [users, setUsers] = useState([])
    const [isDark, setIsDark] = useState(false)
    if (componentYarandimi === false) {
        axios.get(url).then(({ data }) => {
            setUsers(data);
            componentYarandimi = true

        })
    }

    // 12:25
    return (
        <div className={isDark ? "darkContainer": null}
        >
            <button onClick={() => setIsDark(!isDark)}
            >{isDark ? '☀' : '🥮'}
            </button>


            {
                users.map((user) => <div key={user.id} >

                    <h1>
                        <button onClick={() => setUsers(users.filter((_user) => _user.id !== user.id))}>
                            x</button>
                        {user.username}
                    </h1>


                </div>
                )
            }
        </div>
    )
}

export default Users