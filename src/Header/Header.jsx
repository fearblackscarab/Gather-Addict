import "./header.css"
const Header = (props) => {
    return (
        <div className="header">
            <div className="head-player-name">{props.name}</div>
            <div className="head-player-stats">
                <div>
                    Strength: {props.strength}
                </div>
                <div>
                    Intellect: {props.intellect}
                </div>
                <div>
                    Agility: {props.agility}
                </div>
                <div>
                    Vitality: {props.vitality}
                </div>
            </div>
            <div className="head-player-lvl">Player LVL:{props.level}</div>
        </div>
    );
};
export default Header