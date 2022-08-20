import style from "./Stories.module.css";

const Stories = () => {
  const css = `
    body {
      background: #f5f5f5;
    }
  `;
  const sampleData = [
    {
      id: 0,
      title: "Lorem Ipsum Titole",
      date: "12-4-2022",
      short:
        "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetu mollit anim id est laborum.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 1,
      title: "Lorem Ipsum Titole",
      date: "22-3-2022",
      short:
        "Lorem ipsum dolor sit amet, consectetur Lorem ipsum, consectetu mollit anincididuntim id est laborum.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      title: "Lorem Ipsum Titole",
      date: "27-3-2022",
      short:
        "Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, mollit anim id est laborum.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <main className={style.main}>
      <style>{css}</style>
      <div className={style.section}>
        <h1>Some stories for you 🤓</h1>
        <div className={style.stories}>
          {sampleData.map((story) => (
            <div className={style.story} key={story.id}>
              <h3>{story.title}</h3>
              <span>{story.date}</span>
              <p>{story.short}...read more</p>
              <div></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Stories;
