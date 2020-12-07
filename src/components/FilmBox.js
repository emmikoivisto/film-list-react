import Film from './Film';

const FilmBox = ({films}) => {

    const filmList = films.map( film => {
        return (
            <Film filmItem={film.name} key={film.id}>{film.name} {film.url}</Film>
        )
    });

    return (
        <>
        <h2>This is the film box</h2>
        <ul>
            {filmList}
        </ul>
        </>
    )
};

export default FilmBox;