import { useCallback, useContext } from "react"
import LanguageContextProvider, { LanguageStateContext, LanguageDispatchContext } from "./contexts/LanguageContextProvider"

function Layout() {
  return <MainContent />
}

function MainContent() {
  return <ContentCard />
}

function ContentCard() {
  const { messages, lang } = useContext(LanguageStateContext)

  return <p>{messages[lang].data}</p>
}

function ToggleButton() {
  const setLang = useContext(LanguageDispatchContext)

  const handleClick = useCallback(() => setLang(prev => prev === 'ko' ? 'en' : 'ko'), [setLang])

  return (
    <button onClick={handleClick}>
      토글시키기
    </button>
  )
}

export default function App() {
  return (
    <LanguageContextProvider>
      <Layout />
      <ToggleButton />
    </LanguageContextProvider>
  )
}
