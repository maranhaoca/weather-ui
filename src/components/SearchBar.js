import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

export function SearchBar({ placeholder, data }) {    
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const onHandleChange = (event) => {
        const newSearchTerm = event.target.value
        setSearchTerm(newSearchTerm)

        const newFilteredData = data.filter((value) => {
            return value.name.toLowerCase().startsWith(newSearchTerm.toLowerCase())
        }).sort((a, b) => a.name.localeCompare(b.name))

        newSearchTerm === '' ? setFilteredData([]) : setFilteredData(newFilteredData)
    }

    const onClearInput = () => {
        setFilteredData([])
        setSearchTerm('')
    }

    const onSearch= (searchTerm) => {
        // aqui entra a API
        console.log(searchTerm)
    }
    
    return (
        <div className="search">
            <div className="searchInputs">
                <input
                type="text"
                placeholder={placeholder}
                value={searchTerm}
                onChange={onHandleChange}
                />
                <button className="searchIcon" >
                    {filteredData.length === 0 ? (
                        <SearchIcon />
                        ) : (
                        <CloseIcon id="clearBtn" onClick={onClearInput} />)}
                </button>
            </div>
            {filteredData.length !== 0 && (
            <div className="dataResult">
                {filteredData.map((value) => (
                    <a className="dataItem" onClick={() => onSearch(value.name)}>
                        <p>{value.name}</p>
                    </a>
                    ))}
            </div>
            )}
        </div>
    )
}
