import { useState } from 'react';
import './App.css';
import CodePiece from './components/CodePiece';
import Settings from './components/Settings';
import SearchableBox from './components/SearchableBox';
import BoxItem from './components/BoxItem';

function App() {
  const array = [
    {
      id: 1,
      name: 'Youtube',
      imageUrl: 'https://www.youtube.com/favicon.ico',
    },
    {
      id: 2,
      name: 'Facebook',
      imageUrl: 'https://www.facebook.com/favicon.ico',
    },
    {
      id: 3,
      name: 'Twitter',
      imageUrl: 'https://www.twitter.com/favicon.ico',
    },
    {
      id: 4,
      name: 'Instagram',
      imageUrl: 'https://www.instagram.com/favicon.ico',
    },
    {
      id: 5,
      name: 'Reddit',
      imageUrl: 'https://www.reddit.com/favicon.ico',
    },
  ];

  const [theme, setTheme] = useState(false);
  const [isAlwaysOpen, setIsAlwaysOpen] = useState(true);
  const [title, setTitle] = useState('Type to search');

  return (
    <div className="App">
      <div>
        {/*   <div className="select_container">
        <button className="select_button">Select</button>
        <button className="select_button">SearchBox</button>
      </div> */}
        <div className="header">
          <div className="header__element">
            <div className="header__title">React Searchable Component</div>
            <div className="header__description">
              Fast, composable, unstyled command menu for React.
            </div>
          </div>
          <div className="header__element">
            <div className="header__install">
              <span>npm install searchable</span>
              <span className="header__install_box">
                <img src="/assets/copy.svg" alt="" width={16} />
              </span>
            </div>
            <div className="header__link">
              <span>
                <img src="/assets/github.png" alt="" width={16} />
              </span>
              <span>arxlan/cmdk</span>
            </div>
          </div>
        </div>

        <div className="settings__container">
          <Settings
            setTheme={setTheme}
            setIsAlwaysOpen={setIsAlwaysOpen}
            setTitle={setTitle}
          />
        </div>

        <div className="component">
          <SearchableBox
            darkTheme={theme}
            title={title}
            items={array}
            alwaysOpen={isAlwaysOpen}
          >
            {(items) =>
              items.map((item, index) => (
                <BoxItem key={index}>
                  <div>
                    <img src={item.imageUrl} alt="" width={22} />
                  </div>
                  <div>{item.name}</div>
                </BoxItem>
              ))
            }
          </SearchableBox>
        </div>

        <CodePiece />
      </div>
    </div>
  );
}

export default App;
