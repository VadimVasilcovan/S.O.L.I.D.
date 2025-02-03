const Displaydata = () => {
    {displaySelectedAray.map((dysplayArray) => (
        <div>
            <ul key={dysplayArray.id}>
                    <li>{dysplayArray.name}</li>
            </ul>
        </div>
    ))}

}