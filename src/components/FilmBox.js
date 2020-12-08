import Film from './Film';

const FilmBox = ({films}) => {

    const filmList = films.map( film => {
        return (
            <Film filmItem={film.name} key={film.id}>{film.url}</Film>
        )
    });

    return (
        <>
        <h2>Titles</h2>
        <ul>
            {filmList}
        </ul>
        </>
    )
};

export default FilmBox;