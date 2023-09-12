import styled from "@emotion/styled";

const CardExperienceWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colorCardBackground,
  border: "2px solid #232f4d",
  color: theme.palette.colorContent,
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const TittleCard = styled("h3")(({ theme }) => ({
  color: theme.palette.colorTittle,
  margin: "0px",
}));

const Tecnology = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colorHoverContrast,
  color: theme.palette.colorContrast,
}));
const CardExperience = (props) => {
  console.log(props.index);
  const { time, position, company, description, tecnologies } =
    props.experience;

  return (
    <CardExperienceWrapper
      className={`${
        props.position % 2 ? "animate-fade-right" : "animate-fade-left"
      } flex font-family h-auto gap-x-4 w-full p-8 box-border rounded-md leading-6`}
    >
      <div className="w-44">
        <h5 className="m-0 w-full text-xs font-semibold mb-2">{time}</h5>
      </div>
      <div className="flex flex-col h-auto w-full">
        <TittleCard className="m-0 font-medium text-base text-clip">
          {position}. {company}
        </TittleCard>
        <p className="m--0 pr-4 mt-2 leading-5">{description}</p>
        <ul className="list-none flex gap-4 flex-wrap p-0 mt-4">
          {tecnologies.map((tec, index) => (
            <Tecnology
              className="flex gap-4 flex-wrap  text-sm leading-5 py-1 px-3 rounded-3xl"
              key={index}
            >
              {tec}
            </Tecnology>
          ))}
        </ul>
      </div>
    </CardExperienceWrapper>
  );
};

export default CardExperience;
