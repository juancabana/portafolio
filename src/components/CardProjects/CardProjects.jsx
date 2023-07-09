import React from 'react';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";


const CardProjects = ({ url, title, description, tecnologies }) => {
    const CardsProyects = styled(Link)(({ theme }) => ({
        height: '220px',
        width: '330px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#112240',
        cursor: 'pointer',
        padding: '25px',
        paddingTop: '30px',

        textDecoration: 'none',
        '&:hover': {
            transform: 'translateY(-7px)',
            transition: 'all 0.25s',
        }
    }))
    const ImgProject = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        height: '80px',
        width: '100%',
    }))
    const SubtittleCard = styled('h3')(({ theme }) => ({
        width: '100%',
        fontFamily: '"Montserrat", sans-serif',
        fontSize: '18px',
        fontWeight: '700',
        color: '#ccd6f6',
        margin: '0px',
    }))
    const PCard = styled('p')(({ theme }) => ({
        fontFamily: '"Montserrat", sans-serif',
        color: '#ccd6f6',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '1.5',
    }))
    const DescriptionCard = styled('div')(({ theme }) => ({
        fontFamily: '"Montserrat", sans-serif',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: '#ccd6f6',
        fontSize: '12px',
    }))
    const FolderImg = styled('svg')(({ theme }) => ({
        fill: 'aquamarine',
    }))
    return (
        <CardsProyects href={url} target="_blank" rel="noopener noreferrer">
            <ImgProject>
                <FolderImg
                    xmlns="http://www.w3.org/2000/svg"
                    height="60"
                    width="60"
                >
                    <path d="M7.05 40Q5.85 40 4.95 39.075Q4.05 38.15 4.05 37V11Q4.05 9.85 4.95 8.925Q5.85 8 7.05 8H21.05L24.05 11H41.05Q42.2 11 43.125 11.925Q44.05 12.85 44.05 14V37Q44.05 38.15 43.125 39.075Q42.2 40 41.05 40ZM7.05 11V37Q7.05 37 7.05 37Q7.05 37 7.05 37H41.05Q41.05 37 41.05 37Q41.05 37 41.05 37V14Q41.05 14 41.05 14Q41.05 14 41.05 14H22.8L19.8 11H7.05Q7.05 11 7.05 11Q7.05 11 7.05 11ZM7.05 11Q7.05 11 7.05 11Q7.05 11 7.05 11V14Q7.05 14 7.05 14Q7.05 14 7.05 14V37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Q7.05 37 7.05 37Z" />
                </FolderImg>
            </ImgProject>
            <SubtittleCard>{title}</SubtittleCard>
            <PCard>
                {description}
            </PCard>
            <DescriptionCard>
                {tecnologies.map((tecnology, index) => <h4 key={index}>{tecnology}</h4>)}
            </DescriptionCard>
        </CardsProyects>
    );
}

export default CardProjects;