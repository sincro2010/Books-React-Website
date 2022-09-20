import React, { Fragment } from 'react';

const Chapter = (props) => {

  const {chapter, index, font} = props;


  const {
    chapterContent
  } = chapter;

  return (
    <>
    <article className="chapter-content" style={{fontSize: font + `px`}}>
      <div className="container">
        <Fragment>
        <p>{chapterContent}</p>
        </Fragment>
      </div>
    </article>
    </>
  );
};

export default Chapter;
