import { useSelector } from "react-redux";
import { SpanishAbout, EnglishAbout } from "./contentPage";

export const AboutPage = () => {
  const spanish = useSelector((state) => state.states.spanish);

  return (
    spanish ? <SpanishAbout/> : <EnglishAbout/> 
  )
}
