import React, {FC} from 'react';
import ItemList from "../components/ItemList/ItemList";
import {headphones, wirelessHeadphones} from "../utils/headphoneArr";

const MainPage: FC = () => {
    return (
        <div>
            <ItemList title='Наушники' items={headphones}/>
            <ItemList title='Беспроводные наушники' items={wirelessHeadphones} />
        </div>
    );
};

export default MainPage;