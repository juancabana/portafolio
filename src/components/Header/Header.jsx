import React from "react";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';


const Header = () => {


  const StyledLink = styled(Link)((theme) => ({
    display: 'flexbox',
    textAlign: 'center',
    height: 'auto',
    width: '100px',
    color: 'aquamarine',
    textDecoration: 'none',
    fontFamily: 'Roboto Mono, monospace',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '15px',
  }))

  const Container = styled('div')(({ theme }) => ({
    height: '70px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  }));

  const NavWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
  }));

  const ListWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  }));

  const ImgContainer = styled('div')(({ theme }) => ({
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '190px',
    fontSize: '50px',
    textDecoration: 'overline',
    fontFamily: 'Montserrat, sans-serif',
    color: 'aquamarine',
  }));

  const WrapperTitleName = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
  }));

  const TittleName = styled('h3')(({ theme }) => ({
    textAlign: 'center',
    width: '80%',
    color: 'aquamarine',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '15px',
    fontFamily: 'Montserrat, sans-serif',
  }));


  return (
    <Container>
      <NavWrapper>
        <ImgContainer>
          JC
        </ImgContainer>

        <ListWrapper>
          <StyledLink to="/">
            Home.
          </StyledLink>
          <StyledLink to="/about">
            About.
          </StyledLink>
          <StyledLink to="/skills">
            Skills.
          </StyledLink>
          <StyledLink to="/proyects">
            Proyects.
          </StyledLink>
          <StyledLink to="/contact">
            Contact.
          </StyledLink>
        </ListWrapper>

        <WrapperTitleName>
          <TittleName>Juan Cabana.</TittleName>
        </WrapperTitleName>
      </NavWrapper>
    </Container>
  );

}

export default Header;