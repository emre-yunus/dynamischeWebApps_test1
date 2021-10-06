import {ITEMS} from "../data/data";
import {List} from "./List";

export function Brands(props) {
    const {title, cars} = props;
    const brands = [...new Set(cars.map(c => c.brand))];
    const brandsWithNumbers = brands.map(b => ({name: b, numberOfCars: cars.reduce((counter, p) => (p.brand===b ? ++counter : counter), 0)}));
    return (
        <div className="section">
            <h3>{title}</h3>
            {brandsWithNumbers.map(brand => <Brand name={brand.name} numberOfCars={brand.numberOfCars} key={brand.name} />)}
        </div>
    )
}

function Brand(props) {
    const {name, numberOfCars} = props;
    return (
        <div className="card big">
            <div>{name}</div>
            <div>{numberOfCars}</div>
            <List title="Types" items={ITEMS}></List>
        </div>
    )
}