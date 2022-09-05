import React from 'react';
import {booksPropTypes} from '../../common/prop-types.js';
import {ActionCreator} from "../../store/action";

const TableOfContents = (props) => {

 const {reader} = props;

 return (
  <>
  {reader.map((chapter) => (
    <option value={chapter.id} key={chapter.id}>{chapter.chapterTitle}</option>
   ))}
  </>
 );
};

export default TableOfContents; 