import Card from "../UI/Card"

const Trainer = ({image, name, job, socials}) => {
  return (
    <Card className="trainer">
      <div className="trainertoimg">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="trainertosocials">
        {
          socials.map(({icon, link, }, index) => {
            return <a key={index} href={link} target="_blank" rel="noreffer noopener">{icon}</a>
          })
        }
      </div>
    </Card>
  )
}

export default Trainer
