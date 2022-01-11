import "./HowToPlay.css";

export default function HowToPlay() {
    return (
        <div className="howtoplay-container">
            <div className="heading-container">
                <h1>HOW TO PLAY</h1>
            </div>
            <div className="howtoplay-body">
                <p>
                    Player moves through 9 rooms spread across 3 levels. He advances through rooms with the move command.
                    If a player encounters a monster, he won't be able to move to the next room until he defeats the monster.
                    <p>To engage in combat with the monster, player uses the fight command. Every turn the player inflicts damage 
                    to the monster and the monster fights back inflicting damage to the player. 
                    </p>
                    <p>Player also collects the items he finds in empty rooms or the items dropped by the monster when it's killed. 
                    There are 4 types of items that can be collected: healing potion, weapon, powerup and the Orb of Quarkus.
                    Healing potions restore a certain amount of health, while powerup increases maximum health. Weapon increases 
                    the player's damage.
                    </p>
                    <p>
                    The game finishes succesfully when the player defeats the final monster and obtains the Orb of Quarkus, or if he 
                    dies in a fight.
                    </p>
                </p>
            </div>
        </div>
    )
}