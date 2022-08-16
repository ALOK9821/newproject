import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Carlog from "../../../assets/images/car-logo.png";

const Logocontainer = styled.div`
    ${tw`
        flex 
        items-center
    `}
`;
const Logotext = styled.div`
    ${tw`
        text-xl
        md:text-2xl
        font-bold
        text-black
         m-1
    `}
`;

const Image = styled.div`
    width: auto ;

    ${tw`
        h-6 
        md:h-9
    `}
    img{
        width:auto;
        height:100%;

    }
`;

export function Logo(){
    return <Logocontainer>
        <Image>
            <img src={Carlog}/>
        </Image>
        <Logotext>
            RentIT
        </Logotext>
    </Logocontainer>
}

