import { User } from "../user/User"
import { useState } from "react";
import { randomId } from "../../../js";
const initUsers = [
    { id: randomId(), name: 'user1', surname: 'surn1', age: 30, isEdit: false },
    { id: randomId(), name: 'user2', surname: 'surn2', age: 31, isEdit: false },
    { id: randomId(), name: 'user3', surname: 'surn3', age: 32, isEdit: false },
];

export function Users() {

    const [data, setData] = useState(initUsers)

    function toggleMode(id) {
        setData(data.map(item => {
            if (item.id === id) {
                item.isEdit = !item.isEdit;
            }

            return item;
        }));
    }



    return (<>
        {data.map(item => {
            return <User toggleMode={toggleMode} isEdit={item.isEdit} key={item.id} id={item.id} name={item.name} surname={item.surname} age={item.age} />
        })}
    </>

    )
}