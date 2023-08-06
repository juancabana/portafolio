import styled from "@emotion/styled";

const CardExperienceWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    height: 'auto',
    columnGap: '1rem',
    width: '100%',
    backgroundColor: theme.palette.colorCardBackground,
    padding: '2rem',
    boxSizing: 'border-box',
    border: '2px solid #232f4d',
    borderRadius: '5px',
    color: theme.palette.colorContent,
    fontFamily: theme.palette.fontFamily,
    lineHeight: '1.5',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column'
    },
}))
const TimeSubtitleWrapper = styled('div')(({ theme }) => ({
    width: '170px',

}))
const TimeSubtitle = styled('h5')(({ theme }) => ({
    margin: '0px',
    width: '100%',
    fontSize: '.75rem',
    lineHeight: '1rem',
    fontWeight: '600',
    marginBottom: '.5rem'


}))
const ContentCardWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    width: '100%',
}))
const TittleCard = styled('h3')(({ theme }) => ({
    color: theme.palette.colorTittle,
    margin: '0px',
    fontWeight: '500',
    fontSize: '17px',
    lineHeight: '1rem',


}))
const Description = styled('p')(({ theme }) => ({
    margin: '0px',
    paddingRight: '1rem',
    lineHeight: '1.2rem',
    marginTop: '.5rem'

}))
const List = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    padding: '0px'


}))
const Tecnology = styled('div')(({ theme }) => ({
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    backgroundColor: theme.palette.colorHoverContrast,
    lineHeight: '1.25rem',
    padding: '0.25rem 0.75rem',
    borderRadius: '25px',
    color: theme.palette.colorContrast,
    fontSize: '15px'
}))

const CardExperience = (props) => {
    const { time, position, company, description, tecnologies } = props.experience;

    return (
        <CardExperienceWrapper>
            <TimeSubtitleWrapper className="wrapper">
                <TimeSubtitle>{time}</TimeSubtitle>
            </TimeSubtitleWrapper>
            <ContentCardWrapper>
                <TittleCard>{position}. {company}</TittleCard>
                <Description>
                    {description}
                </Description>
                <List>
                    {tecnologies.map((tec, index) => (
                        <Tecnology key={index}>{tec}</Tecnology>
                    ))}
                </List>
            </ContentCardWrapper>
        </CardExperienceWrapper>
    );
}

export default CardExperience;