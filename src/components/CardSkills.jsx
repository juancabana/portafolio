import React from 'react';
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button, Collapse, List, ListItem, ListItemText } from '@mui/material';




const CardSkills = ({name, url, level}) => {

    const language = useSelector(state => state.language.language)

    const WrapperCard = styled('div')(({ theme }) => ({
        boxSizing: 'border-box',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: theme.palette.colorCardBackground
    
    }))
    const ImageCard = styled('div')(({ theme }) => ({
        height: '100px',
        maxHeight: '90px',
        width: '100px',
        minWidth: '90px',
        borderRadius: '10px',
        padding: '10px',
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
        marginLeft: '1rem'
    }))
    const TittleSkill = styled('h2')(({ theme }) => ({
        color: theme.palette.colorItemHeader,
        fontFamily: 'monospace',
        margin: '0px',
        fontSize: '25px',
    }))
    const TittleLevel = styled('h4')(({ theme }) => ({
        color: theme.palette.colorContrast,
        fontFamily: 'monospace',
        marginTop: '5px',
        marginBottom: '10px',
        fontSize: '15px',
        fontWeight: '200'
    }))
    const Paragraph = styled('p')(({ theme }) => ({
        color: theme.palette.colorContent,
        fontFamily: 'monospace',
        fontSize: '15px',
        fontWeight: '300'
    }))








    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(!open);
    };
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






            <Button onClick={handleClick}>Abrir menú</Button>
      <Collapse in={open}>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText primary="Opción 1" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Opción 2" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Opción 3" />
          </ListItem>
        </List>
      </Collapse>
        </WrapperCard>
    );
}

export default CardSkills;