import { useState } from 'react';
import './App.css';
import BoxItem from './components/BoxItem';
import CodePiece from './components/CodePiece';
import SearchableBox from './components/SearchableBox';
import Settings from './components/Settings';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const array = [
    {
      id: 1,
      name: 'Youtube',
    },
    {
      id: 2,
      name: 'Facebook',
    },
    {
      id: 3,
      name: 'Twitter',
    },
    {
      id: 4,
      name: 'Instagram',
    },
    {
      id: 5,
      name: 'Reddit',
    },
  ];

  const [theme, setTheme] = useState('light');

  return (
    <div className="App">
      <div>
        {/*   <div className="select_container">
        <button className="select_button">Select</button>
        <button className="select_button">SearchBox</button>
      </div> */}
        <div className="header">
          <div className="header__element">
            <div className="header__title">Title</div>
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

        <div className="toggle__container">
          <ToggleTheme theme={theme} setTheme={setTheme} />
        </div>

        <Settings theme={theme} setTheme={setTheme} />

        <div className="component">
          <SearchableBox
            darkTheme={theme === 'dark'}
            placeholder
            title={'Type Something'}
            items={array}
          >
            {(items) =>
              items.map((item, index) => (
                <BoxItem key={index}>
                  <span>
                    <img src="/assets/youtube.svg" alt="" width={24} />
                  </span>
                  <span>{item.name}</span>
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
