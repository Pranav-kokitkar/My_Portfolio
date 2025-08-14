import "./header.css";
import skillApi from "../Api/skillsApi";

export const Skills = () => {
  return (
    <ul className="skills-container">
      {skillApi.map((curElem)=>
        <SkillsCard key ={curElem.id} data={curElem}/>
      )}
    </ul>
  );
};

const SkillsCard = ({data}) => {
  const { name, image, knowledge, description } = data;
  return (
    <li className="cards-container">
      <div>
        <img src={image}></img>
      </div>

      <div>
        <p>{name}</p>
      </div>

      <div className="description">
        <p>{description}</p>
      </div>

      <div className="bar">
        <div className="fill" style={{ width: `${knowledge}%` }}></div>
      </div>
    </li>
  );
};





