export function Brands(props) {
    const {title, cars} = props;
    return (
        <div className="section">
            <h3>{title}</h3>
            {cars.map(car => <Brand name={car.brand} key={car.name} />)}
        </div>
    )
}

function Brand(props) {
    const {name, numberOfCars} = props;
    return (
        <div className="section">
            <div>{name}</div>

        </div>
    )
}