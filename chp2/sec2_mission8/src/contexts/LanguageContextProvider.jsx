import { createContext, useState } from "react";

const messages = {
        ko: {
            label: '현재 전역 감지 언어',
            data: '안녕하세요, React Times에 오신 것을 환영합니다.'
        },
        en: {
            label: 'Global Detected Language',
            data: 'Hello, welcome to React Times'
        }
    }

export const LanguageStateContext = createContext({ messages, lang: 'ko' })
export const LanguageDispatchContext = createContext(() => {})

export default function LanguageContextProvider({ children }) {
    const [lang, setLang] = useState('ko')

    return (
        <LanguageStateContext.Provider value={{ messages, lang }}>
            <LanguageDispatchContext.Provider value={setLang}>
                {children}
            </LanguageDispatchContext.Provider>
        </LanguageStateContext.Provider>
    )
}

