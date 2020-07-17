import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import './searchBar.scss'

export default function SearchBar() {
    return (
        <div className="search-container">
            <div className="search-content">
                <div className="search-bar">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        className="search-input"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </div>
        </div>
    )
}