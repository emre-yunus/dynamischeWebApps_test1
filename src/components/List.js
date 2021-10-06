export function List(props) {
    const {title, items} = props;
    return (
        <ul>
            <h3>{title}</h3>
            {items.map(item => <Item key={item.nr} item={item} />)}
        </ul>
    )
}

function Item(props) {
    const {item} = props;
    return (
        <li>{item.name}</li>
    )
}