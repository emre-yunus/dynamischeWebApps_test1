function Person(props) {
    const {person} = props;
    return <div className="card">
        <h4>{person.name}</h4>
        <div>{person.age}</div>
        <div>{person.city}</div>
    </div>
}

export function Persons(props) {
    const {title, persons} = props;
    return <div className="section">
        <h3>{title}</h3>
        {persons.map(p => <Person key={p.id} person={p} />)}
    </div>
}