const Image = (props) => {
    return(
        <img src={props.url} alt={props.name} width={props.width} height={props.height} />
    )
}

export default Image;