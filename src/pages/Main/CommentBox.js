import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './CommentBox.scss';

const input = document.querySelector('.commentInput');
const button = document.querySelector('#commentButton');
const addUl = document.querySelector('.addUl');

const onAdd = function () {
  const text = input.value;
  const str = 'bitnalee ';
  const res = str.bold();

  const item = document.createElement('li');
  item.setAttribute('className', 'item');
  const itemText = document.createElement('span');
  itemText.setAttribute('className', 'itemText');
  itemText.innerHTML = res + text;

  item.appendChild(itemText);
  addUl.appendChild(item);
  input.value = '';
  input.focus();
}

// button.addEventListener('click', function () {
//   onAdd();
// })

// input.addEventListener('keypress', function (e) {
//   if (e.key === 'Enter') {
//     onAdd();
//   }
// });

const CommentBox = () => {
  return (
    <div className="commentBox">
      <input type="text" className="commentInput" id="commentInput" placeholder="댓글 달기..." />
      <button type="button" id="commentButton" className="commnetButton">게시</button>
    </div>
  )
};

export default CommentBox;