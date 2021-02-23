const StoredUseClass = (props: any) => {
    console.log(props.storedUseClass.useClass)
    return (
        <table>
            <tr>
                <th>Land use</th>
                <th>Required long-stay spaces</th>
                <th>Required short-stay spaces</th>
            </tr>
            <tr>
                <td>{props.storedUseClass.useClass}</td>
                <td>{props.ls}</td>
                <td>{props.ss}</td>
            </tr>
        </table>
    )
}

export default StoredUseClass