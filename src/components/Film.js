const Film = ({filmItem, children}) => {
    return (
        <li>
            <a href={children}>{filmItem}</a>
        </li>
    )
};

export default Film;