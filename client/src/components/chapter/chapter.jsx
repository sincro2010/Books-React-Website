import React from 'react';

const Chapter = (props) => {

  const {chapter, index, font} = props;


  const {
    chapterContent
  } = chapter;

  return (
    <>
    <article className="chapter-content" style={{fontSize: font + `px`}}>
      <div className="container">
        {chapterContent}
      </div>
    </article>
    </>
  );
};

export default Chapter;
