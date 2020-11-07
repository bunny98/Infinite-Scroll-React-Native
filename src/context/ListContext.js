import React, { useState } from 'react';

const ListContext = React.createContext();

export const ListProvider = ({ children }) => {
    const [listItems, setListItems] = useState([]);

    const imageSrcProvider = (num) => {
        switch (num) {
            case 1:
                return require('../../assets/images/1.jpg');
            case 2:
                return require('../../assets/images/2.jpg');
            case 3:
                return require('../../assets/images/3.jpg');
            case 4:
                return require('../../assets/images/4.jpg');
            case 5:
                return require('../../assets/images/5.jpg');
            default:
                return require('../../assets/images/1.jpg');
        }
    }

    const addListItem = () => {
        const toAddItems = [];
        for (let i = 0; i < 10; ++i) {
            // console.log(`LIST ITEM ${listItems.length + i}`);
            const imageSrc = imageSrcProvider(Math.floor(Math.random() * 6) + 1);
            toAddItems.push({ title: `LIST ITEM ${listItems.length + i}`, imageSrc });
        }
        setListItems([...listItems, ...toAddItems]);
    }

    return <ListContext.Provider value={{ data: listItems, addListItem }}>
        {children}
    </ListContext.Provider>
}

export default ListContext;