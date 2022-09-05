import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Chapter from '../chapter/chapter';
import TableOfContents  from '../table-of-contents/table-of-contents';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {AppRoute, MAX_NUMBER_BUTTONS} from '../../common/const';
import {ButtonTypes} from '../../common/const';
import {getBookReader, getBook} from '../../common/utils.js';
import {fetchBookReader} from "../../store/api-actions";
import LoadingScreen from '../loading-screen/loading-screen';
import {ActionCreator} from '../../store/action';

/* const Reader = (props) => {

    const {
        onReaderDataRender,
        activeBookId,
        reader,
        fontSize,
      } = props;

  useEffect(() => {
    onReaderDataRender(activeBookId)
    },[activeBookId]);

  const {
    chapters,
    book
  } = reader;
  const chaptersNumbers = Array.from(new Set(reader.map((chapter) => chapter.id)));

const [selectForm, setSelectForm] = useState ({
  value: 1,
});

const handleChapterChange = (evt) => {
  const {value} = evt.target;
  setSelectForm({...selectForm, value});
};

const index = selectForm.value;
const chapter = chapters[index - 1];
const {
  chapterTitle
} = chapter

const handleGoBackChapter = () => {
    const {value} = [value - 1];
    setSelectForm({...selectForm, value});
};


const [rangeForm, setRangeForm] = useState ({
    value: 14,
  });

const handleFontSizeChange = (evt) => {
    const {value} = evt.target;
    setRangeForm({...rangeForm, value});
  };

  const font=rangeForm.value;

 return (
  <>
<div className="page light-theme">
	<div className="main">
  <Header />
    
    <div className="breadcrumbs">
		<Link to={AppRoute.MAIN}>Главная</Link>
		<Link to={getBook(activeBookId)}>{book.title}</Link>
		<Link className="active" to={getBookReader(activeBookId)}>{chapterTitle}</Link>
	  </div>

    <div className="reader">
        <div className="controls">
            <div className="settings contents">
                <label>Оглавление:
                    <select name="content" onChange={handleChapterChange}>
                        <TableOfContents chapters={chapters} />
                    </select>
                </label>
            </div>
        <div className="settings size">
            <label> Размер текста: (<output name="pixels" className="pixels">{`${rangeForm.value}`}</output>px)
                <input name="sizesetting" className="size-setting" type="range" min="8" max="48" step="1" value={rangeForm.value} onChange={handleFontSizeChange}/>
            </label>          
        </div>
    </div>

        <div className="paginator">
            <ul>
                <li className={ButtonTypes.GO_BACK} onClick={handleGoBackChapter}>
                    <a href="#prev">Назад</a>
                </li>
                {chaptersNumbers.slice(0, MAX_NUMBER_BUTTONS).map((id) => {
                  return (
                    <li className={ButtonTypes.TURN_PAGE} key={id}>
                      <a href="#1">{id}</a>
                    </li>
                  );
                })}
                <li className={ButtonTypes.GO_FORWARD}>
                    <a href="#next">Вперёд</a>
                </li>
            </ul>
        </div>
            <Chapter chapters={chapters}  index={index} font={font}/>
    </div>
    

<Footer />

</div>
<button className="up-button" type="button">
    ↑
    <span className="visually-hidden">Наверх</span>
  </button>
</div>
</>
 );
};

const mapStateToProps = (state) => ({
    reader: state.reader,
    activeBookId: state.activeBookId,
    fontSize: state.fontSize,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    onReaderDataRender(id) {
      dispatch(fetchBookReader(id));
    },
  });

export {Reader};
export default connect(mapStateToProps, mapDispatchToProps)(Reader); */



const Reader = (props) => {

  const {
      onReaderDataRender, 
      activeBookId,
      reader,
      fontSize,
      book,
      isReaderLoaded,
      currentPage,
      oncurrentPageSet,
      onBackButtonValueSet,
      onPaginateButtonValueSet,
      onForwardButtonValueSet
      
    } = props;

const {id} = useParams();

useEffect(() => {
  onReaderDataRender(id)
  },[id]);
  




const chaptersNumbers = Array.from(new Set(reader.map((chapter) => chapter.id)));

// const [selectForm, setSelectForm] = useState ({
//   value: 1,
// });
// const handleChapterChange = (evt) => {
//   const {value} = evt.target;
//   setSelectForm({...selectForm, value});
// };

// const index = selectForm.value;
// const chapter = reader[index - 1] || {};


// console.log(chapter.chapterContent);

// const {
//   chapterTitle
// } = chapter;


const handleChapterChange = (evt) => {
  evt.preventDefault();
  const {value} = evt.target;
  oncurrentPageSet(value);
  console.log(value);
  };
const index = currentPage;
const chapter = reader[index - 1] || {};




const {
  chapterTitle,
  bookId
} = chapter;


const handleGoBackChapter = (evt) => {
  evt.preventDefault();
  onBackButtonValueSet(index - 1);
};

const handleGoForwardChapter = (evt) => {
  evt.preventDefault();
  onForwardButtonValueSet(index + 1);
};

const handlePaginateChapter = (id) => (evt) => {
  evt.preventDefault();
  onPaginateButtonValueSet(id);
};


const [rangeForm, setRangeForm] = useState ({
  value: 14,
});

const handleFontSizeChange = (evt) => {
  const {value} = evt.target;
  setRangeForm({...rangeForm, value});
};

const font=rangeForm.value;




return (
<>
<div className="page">
<div className="main">
<Header />
  
  <div className="breadcrumbs">
  <Link to={AppRoute.MAIN}>Главная</Link>
  <Link to={getBook(bookId)}>{book.title}</Link>
  <Link className="active" to={getBookReader(id)}>{chapterTitle}</Link>
  </div>

  <div className="reader">
      <div className="controls">
          <div className="settings contents">
              <label>Оглавление:
                  <select name="content" onChange={handleChapterChange}>
                      <TableOfContents reader={reader} />
                  </select>
              </label>
          </div>
      <div className="settings size">
          <label> Размер текста: (<output name="pixels" className="pixels">{`${rangeForm.value}`}</output>px)
              <input name="sizesetting" className="size-setting" type="range" min="8" max="48" step="1" value={rangeForm.value} onChange={handleFontSizeChange}/>
          </label>          
      </div>
  </div>

      <div className="paginator">
          <ul>
              <li className={`ButtonTypes.GO_BACK ${currentPage === 1 && `disabled`}`}>
                  <Link to="#" onClick={handleGoBackChapter}>Назад</Link>
              </li>
              {chaptersNumbers.slice(0, MAX_NUMBER_BUTTONS).map((id) => {
                return (
                  <li className={ButtonTypes.TURN_PAGE} key={id}>
                    <Link to="#" onClick={handlePaginateChapter(id)}>{id}</Link>
                  </li>
                );
              })}
              <li className={`ButtonTypes.GO_FORWARD ${currentPage === reader.length && `disabled`}`} >
                  <Link to="#" onClick={handleGoForwardChapter}>Вперёд</Link>
              </li>
          </ul>
      </div>
          <Chapter chapter={chapter} font={font}/>
  </div>
  

<Footer />

</div>
<button className="up-button" type="button">
  ↑
  <span className="visually-hidden">Наверх</span>
</button>
</div>
</>
);
};

const mapStateToProps = (state) => ({
  reader: state.reader,
  book: state.book,
  activeBookId: state.activeBookId,
  fontSize: state.fontSize,
  isReaderLoaded: state.isReaderLoaded,
  currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  onReaderDataRender(id) {
    dispatch(fetchBookReader(id));
  },
  oncurrentPageSet(value) {
    dispatch(ActionCreator.changeChapter(value));
  },
  onBackButtonValueSet(value) {
    dispatch(ActionCreator.changeChapter(value));
  },
  onForwardButtonValueSet(value) {
    dispatch(ActionCreator.changeChapter(value));
  },
  onPaginateButtonValueSet(value) {
    dispatch(ActionCreator.changeChapter(value));
  }
});

export {Reader};
export default connect(mapStateToProps, mapDispatchToProps)(Reader);