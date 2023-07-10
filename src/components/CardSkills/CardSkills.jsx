import React from 'react';
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";



const CardSkills = ({name, url, level}) => {

    const language = useSelector(state => state.language.language)

    const WrapperCard = styled('div')(({ theme }) => ({
        boxSizing: 'border-box',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '10px',
        border: '1px solid aquamarine',
        // backgroundColor: 'rgba(100,255,218,0.1)',
        // gap: '1rem',
    }))
    const ImageCard = styled('div')(({ theme }) => ({
        height: '100px',
        maxHeight: '90px',
        width: '100px',
        minWidth: '90px',
        // minHeight: '100px',
        borderRadius: '10px',
        // border: '1px solid aquamarine',
        padding: '10px',
        // backgroundColor: 'white',
    }))
    const Image = styled('div')(({ theme }) => ({
        boxSizing: 'content-box',
        width: '100%',
        height: '100%',
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }))
    const WrapperContent = styled('div')(({ theme }) => ({
        width: '100%',
        height: '100%',
        // backgroundColor: 'red',
        marginLeft: '1rem'
    }))
    const TittleSkill = styled('h2')(({ theme }) => ({
        color: '#ffffff',
        fontFamily: 'monospace',
        margin: '0px',
        fontSize: '25px',
    }))
    const TittleLevel = styled('h4')(({ theme }) => ({
        color: 'aquamarine',
        // backgroundColor: 'red',
        fontFamily: 'monospace',
        marginTop: '5px',
        marginBottom: '10px',
        fontSize: '15px',
        fontWeight: '200'
    }))
    const Paragraph = styled('p')(({ theme }) => ({
        color: '#ccd6f6',
        // backgroundColor: 'red',
        fontFamily: 'monospace',
        // marginTop: '5px',
        fontSize: '15px',
        fontWeight: '300'
    }))

    return (
        <WrapperCard>
            <ImageCard>
                <Image >
                </Image>
            </ImageCard>
            <WrapperContent>
                <TittleSkill>{name}</TittleSkill>
                <TittleLevel>{language === 'english' ? 'Level: ' : 'Nivel: '}{level}</TittleLevel>
                <Paragraph>I have basic knowledge in java, due to the object-oriented programming subjects I received at the University.</Paragraph>
            </WrapperContent>
        </WrapperCard>
    );
}

export default CardSkills;