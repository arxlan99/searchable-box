import React, { useState } from 'react';
import { SearchableBox, BoxItem } from 'react-searchable-component';

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
    <div>
      <SearchableBox
        darkTheme={theme}
        placeholder
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
  );
}

export default App;
