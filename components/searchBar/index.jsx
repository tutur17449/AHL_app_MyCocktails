import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import './index.scss'
import BgSeparator from '../bgSeparator/index'

export default function SearchBar(props) {
    return (
        <BgSeparator
            colorFirst='#fff'
            colorSecond='#F5F5F5'
        >
            <div className="search-content">
                <div className="search-bar">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        className="search-input"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => props.setValueToSearch(e.target.value)}
                    />
                </div>
            </div>
        </BgSeparator>
    )
}