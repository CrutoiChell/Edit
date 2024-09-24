
export function User({ id, name, surname, age, isEdit, toggleMode, handleEdit }) {
    return (
        <div id={id}>
            name: {isEdit ? <input value={name} onChange={event => handleEdit(id, "name", event)} /> : <span>{name}</span>}
            <br />
            surname: {isEdit ? <input value={surname} onChange={event => handleEdit(id, "surname", event)} /> : <span>{surname}</span>}
            <br />
            age: {isEdit ? <input value={age} onChange={event => handleEdit(id, "age", event)} /> : <span>{age}</span>}
            <button onClick={() => toggleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
        </div>
    )
}