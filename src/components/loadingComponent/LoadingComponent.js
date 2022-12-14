import {useSelector} from "react-redux";

import css from './loadingComponent.module.css';

function LoadingComponent() {

    let {theme} = useSelector(state => state.switcherReducer);

    return (
        <div className={theme==='light'?`${css.loading} ${css.loadingColor}`:`${css.loading} ${css.loadingColorL}`} id={'loading'}></div>
    );
}

export {LoadingComponent};
