import React, { useState } from 'react';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
    const [listItems, setListItems] = useState([]);

    const addListItem = () => {
        const toAddItems = [];
        for (let i = 0; i < 10; ++i) {
            // console.log(`LIST ITEM ${listItems.length + i}`);
            toAddItems.push({ title: `LIST ITEM ${listItems.length + i}` });
        }
        setListItems([...listItems, ...toAddItems]);
    }

    return <ListContext.Provider value={{ data: listItems, addListItem }}>
        {children}
    </ListContext.Provider>
}

export default ListContext;