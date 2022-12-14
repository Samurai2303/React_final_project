import {useSelector} from "react-redux";

import {FilterMenu, MoviesList} from "../../components";
import css from './moviesPage.module.css';

function MoviesPage() {

    let {theme} = useSelector(state => state.switcherReducer);

  return (
      <div className={theme==='light'?`${css.wrap}`: `${css.wrapL}`}>
          <FilterMenu/>
          <MoviesList/>
      </div>
  );
}

export {MoviesPage};
