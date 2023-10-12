import {TitleStyled, Subtitle} from './Title.style'

//Interface para tipar os parametros 
interface TitleProps{
    title: string;
    subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
    return(
        //fragment
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <Subtitle>{props.subtitle}</Subtitle>
        </>
    )
}