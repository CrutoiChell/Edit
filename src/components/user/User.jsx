
export function User({id,name,surname,age,isEdit,toggleMode}) {
    return (
        <div id={id}>
            {isEdit ? <input/> : <span>{name}</span>}
            surname: <span>{surname}</span>
            age: <span>{age}</span>
            <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
        </div>
    )
}