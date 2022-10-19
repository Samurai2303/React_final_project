import {PosterPreview} from "../posterPreview/PosterPreview";
import {GenreBadge} from "../genreBadge/GenreBadge";
import {AdultWarning} from "../adultWarning/AdultWarning";
import {StarsRating} from "../starsRating/StarsRating";
import {AddToFavourite} from "../addToFavourite/AddToFavourite";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function MoviesListCard({movie}) {

    let navigate = useNavigate();
    let {genres: genresList} = useSelector(state => state.genresReducer);

    let genres = '';
    for (let genreId of movie.genre_ids) {
        let genreItem = genresList.find(value => value.id === genreId);
        genres = genres.concat(`|${genreItem.name}`);
    }
    genres = genres.replace('|', '');

    function click() {
        navigate('/movieInfo', {state: movie.id});
    }

    return (
        <div onClick={() => click()}>
            <PosterPreview path={movie.poster_path ? movie.poster_path : movie.backdrop_path}/>
            <div>
                <p>{movie.title}</p>
                {movie.adult && <AdultWarning/>}
            </div>
            <GenreBadge genres={genres}/>
            <div>
                <StarsRating rating={movie.vote_average}/>
                <AddToFavourite/>
            </div>
        </div>
    );
}

export {MoviesListCard};
