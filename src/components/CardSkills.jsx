import React from 'react';
import styled from "@emotion/styled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Button, Collapse, List } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useTheme } from '@emotion/react';


const CardSkills = ({ name, url, level, certificates, description }) => {
  const theme = useTheme();

  const language = useSelector(state => state.language.language)

  const WrapperCard = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    borderRadius: '10px',
    border: `1px solid ${theme.palette.colorBorder}`,
    backgroundColor: theme.palette.colorCardBackground

  }))
  const ImageCard = styled('div')(({ theme }) => ({
    height: '100px',
    maxHeight: '90px',
    width: '100px',
    minWidth: '90px',
    borderRadius: '10px',
    padding: '5px',
    backgroundColor: '#322d4f',
  }))
  const Image = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxSizing: 'content-box',
    borderRadius: '10px',
  }))
  const WrapperContent = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    marginLeft: '1rem'
  }))
  const TittleSkill = styled('h2')(({ theme }) => ({
    margin: '0px',
    color: theme.palette.colorItemHeader,
    fontFamily: theme.palette.fontFamily,
    fontSize: '25px',
    fontWeight: '300'

  }))
  const TittleLevel = styled('h4')(({ theme }) => ({
    color: theme.palette.colorContrast,
    fontFamily: theme.palette.fontFamily,
    marginTop: '5px',
    marginBottom: '0px',
    fontSize: '15px',
    fontWeight: '200'
  }))
  const Paragraph = styled('p')(({ theme }) => ({
    color: theme.palette.colorContent,
    fontFamily: theme.palette.fontFamily,
    marginTop: '5px',
    fontSize: '15px',
    fontWeight: '300'
  }))
  const WrapperContentCard = styled('div')(({ theme }) => ({
    display: 'flex',
    // alignItems: 'center',
    width: '100%'
  }))

  const WrapperButton = styled('div')(({ theme }) => ({
    display: 'flex',
    margin: '0px',
    padding: '0px',
    width: '100%'
  }))
  const Projectink = styled('a')(({ theme }) => ({
    padding: '0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    borderRadius: '0px',
    fontFamily: ' ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    border: `1px solid ${theme.palette.colorContrast}`,
    color: theme.palette.colorContrast,
    padding: '5px',
    ':hover': {
      backgroundColor: theme.palette.colorHoverContrast,
      transition: 'all 0.3s',
      transform: 'translateY(-4px)',
      transition: 'all 0.25s',
    }

  }))


  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <WrapperCard>
      <WrapperContentCard>
        <ImageCard>
          <Image >
          </Image>
        </ImageCard>
        <WrapperContent>
          <TittleSkill>{name}</TittleSkill>
          <TittleLevel>{language === 'english' ? 'Level: ' : 'Nivel: '}{level}</TittleLevel>
          <Paragraph>{description}</Paragraph>
        </WrapperContent>
      </WrapperContentCard>




      {/* <Hr /> */}

      <WrapperButton>

        <Button style={{ padding: '0px', marginTop: '5px', fontFamily: theme.palette.fontFamily, color: theme.palette.colorSubTittle }} onClick={handleClick}>{language === 'english' ? 'Certificates' : 'Certificados'} {!open ? <KeyboardArrowDownIcon style={{ color: theme.palette.colorSubTittle }} /> : <KeyboardArrowUpIcon style={{ color: theme.palette.colorSubTittle }} />}</Button>


      </WrapperButton>
      <Collapse in={open} style={{ width: '100%' }}>
        <List component="div" disablePadding style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: 'center', marginTop: '.5rem' }} >
          {certificates.map((certificate, index) => <Projectink key={index} target='_blank' href={certificate.url}>
            {certificate.tittle}
          </Projectink>)}
        </List>
      </Collapse>
    </WrapperCard>
  );
}

export default CardSkills;