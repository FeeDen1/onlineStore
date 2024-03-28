import React, {FC, useState} from 'react';
import cl from './Footer.module.css'
import GlobalIcon from "../../UI/globalIcon/GlobalIcon";
import VkIcon from "../../UI/vkIcon/VkIcon";
import TelegramIcon from "../../UI/telegramIcon/TelegramIcon";
import WhatsappIcon from "../../UI/whatsappIcon/WhatsappIcon";

const Footer:FC = () => {
    const langArr: string[] = ['Каз', 'Рус', 'Eng']
    const [activeLang, setActiveLang] = useState('Рус')
    return (
        <div className={cl.footer}>
            <div className={cl.wrapper}>
                <p className={cl.logoName}>QPICK</p>
                <div className={cl.links}>
                    <p>Избранное</p>
                    <p>Корзина</p>
                    <p>Контакты</p>
                </div>
                <div className={cl.servAndLangCont}>
                    <p>Условия сервиса</p>
                    <div className={cl.langChooseCont}>
                        <GlobalIcon/>
                        {langArr.map((lang) =>
                            <button
                                key={lang}
                                className={activeLang === lang ? cl.buttonActive : ''}
                                onClick={() => setActiveLang(lang)}
                            >
                                {lang}
                            </button>
                        )}
                    </div>
                    <div>

                    </div>
                </div>
                <div className={cl.socialNetLinks}>
                    <VkIcon/>
                    <TelegramIcon/>
                    <WhatsappIcon/>
                </div>
            </div>

        </div>
    );
};

export default Footer;