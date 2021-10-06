
function Brand(props) {
    const {name, numberOfCars} = props;
    return (
        <>
            <div>{name}</div>
            <div>{numberOfCars}</div>
        </>
    )
}