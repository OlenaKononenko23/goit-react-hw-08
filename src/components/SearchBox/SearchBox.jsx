/* eslint-disable react/prop-types */
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { selectFilter } from "../../redux/selectors";
import { setFilter } from '../../redux/filtersSlice';



export default function SearchBox () {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilter);

    const handleFilter = (e) => {
        const value = e.target.value.trim();
        dispatch(setFilter(value));
    };

    return (
        <div className={css.searchBox}>
            <label htmlFor="searchBox" className={css.label}>Find contacts by name</label>
            <input value={filter} onChange={handleFilter} type='text' id='searchBox' className={css.searchInput}></input>
           
        </div>

    )
}