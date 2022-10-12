import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from '@mui/icons-material/Close';

export function SearchBar({ placeholder, data }) {    
    const [filteredData, setFilteredData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    const onChange = (event) => {
        setSearchTerm(event.target.value)

        const filteredData = data
            .filter((value) => { return (
                value.name.toLocaleLowerCase().startsWith(searchTerm.toLocaleLowerCase())
            )})
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((value, index) => { return (
                <div
                    className="dropdown-row"
                    onClick={() => onSearch(value.name)}
                    key={index}
                >
                    {value.name}
                </div>
            )})

        searchTerm ? setFilteredData(filteredData) : setFilteredData([])

        /* const newFilteredData = data.filter((value) => {
            return value.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        }).sort((a, b) => a.name.localeCompare(b.name))

        searchTerm ? setFilteredData([]) : setFilteredData(newFilteredData) */
    }

    const onClearInput = () => {        
        setSearchTerm('')
        setFilteredData([])
    }

    const onSearch= (searchTerm) => {
        setSearchTerm(searchTerm)
        setFilteredData([])
        console.log('Selected: ', searchTerm)
    }
    
    return (
        <div className="search">
            <h1>Weather Forecast</h1>
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={onChange}
                />
                <button className="searchIcon" >
                    {searchTerm.length === 0 ? (
                        <SearchIcon />
                        ) : (
                        <CloseIcon id="clearBtn" onClick={onClearInput} />)}
                </button>
            </div>
                {filteredData}
                {/* {data
                    .filter((value) => { 
                        const searchTermLowerCase = searchTerm.toLocaleLowerCase()
                        const nameLowerCase = value.name.toLocaleLowerCase()

                        return (
                        searchTerm &&
                        nameLowerCase.startsWith(searchTermLowerCase) &&
                        value.name !== searchTerm
                    )})
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((value, index) => { return (
                        <div
                            className="dropdown-row"
                            onClick={() => onSearch(value.name)}
                            key={index}
                        >
                            {value.name}
                        </div>
                    )})
                } */}
                {/* {filteredData.length !== 0 && (
                    <div className="dataResult">
                        {filteredData.map((value, index) => (
                            <a className="dataItem" onClick={() => onSearch(value.name)} key={index}>
                                <p>{value.name}</p>
                            </a>
                            ))}
                    </div>
                )} */}
        </div>
    )
}
