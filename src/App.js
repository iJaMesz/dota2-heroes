import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      heroes: [
        {
          id: 1,
          name: "Abbadon",
          full_name: 'Abbadon, The Lord of Avernus',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/abaddon.png'
        },
        {
          id: 2,
          name: "Alchemist",
          full_name: 'Razzil Darkbrew, The Alchemist',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png'
        },
        {
          id: 3,
          name: "Axe",
          full_name: 'Mogul Khan, the Axe',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png'
        },
        {
          id: 4,
          name: "Beastmaster",
          full_name: 'Karroch, the Beastmaster',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/beastmaster.png'
        },
        {
          id: 5,
          name: "Brewmaster",
          full_name: 'Mangix, the Brewmaster',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/brewmaster.png'
        },
        {
          id: 6,
          name: "Bristleback",
          full_name: 'Rigwarl, the Bristleback',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/bristleback.png'
        },
        {
          id: 7,
          name: "Centaur Warrunner",
          full_name: 'Bradwarden, the Centaur Warrunner',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png'
        },
        {
          id: 8,
          name: "Chaos Knight",
          full_name: 'Chaos Knight',
          image_url: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/chaos_knight.png'
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        <CardList heroes={this.state.heroes}></CardList>
      </div>
    );
  }
}

export default App;
