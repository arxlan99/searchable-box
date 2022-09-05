import React from 'react';

const CodePiece = () => {
  return (
    <div className="codepiece__container">
      <div className="code__block">
        {/*   <button title="copy code" className="code__copy">
          <img src="/assets/copy.svg" alt="" width={20} />
        </button> */}

        <div>
          {`import react-searchable-component from '@arxlan99/react-searchable-component';`}
        </div>

        <div>{`
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
        `}</div>

        <div>
          {` <SearchableBox
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
         </SearchableBox>`}
        </div>
      </div>
    </div>
  );
};

export default CodePiece;
