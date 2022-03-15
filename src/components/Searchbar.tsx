import React, { useState } from "react";

type Props = {
    onSearch: (pokemon: string) => void;
  };

export const Searchbar = ({ onSearch }: Props) => {
    const [search, setSearch] = useState<string>('');

    const onChangeHandler = (e: { target: { value: string } }) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch('')
        }
    };  

    const onButtonClickHandler = () => {
        onSearch(search)
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar pokemon" onChange={onChangeHandler}></input>
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>           
    </div >
  );
};
