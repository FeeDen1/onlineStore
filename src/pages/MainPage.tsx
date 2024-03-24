import React, {FC} from 'react';

import ItemList from "../components/ItemList/ItemList";
import {headphones, wirelessHeadphones} from "../utils/headphoneArr";
import Footer from "../components/footer/Footer";

const MainPage: FC = () => {
    return (
        <div>
            <ItemList title='Наушники' items={headphones}/>
            <ItemList title='Беспроводные наушники' items={wirelessHeadphones}/>
            <Footer/>
        </div>
    );
};

export default MainPage;