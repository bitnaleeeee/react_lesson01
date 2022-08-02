

import React, { useState } from 'react';
import './StoryCommand.scss';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './StoryCommandInfo';
import StoryCommandInfo from './StoryCommandInfo';

const StoryCommand = function () {

  return (
    <div className="storyCommand">
      <div className="moreTitle">
        <div className="text">스토리</div>
        <button type="button">더보기</button>
      </div>

      <StoryCommandInfo />


      <StoryCommandInfo />

      <StoryCommandInfo />

      <StoryCommandInfo />



    </div>
  )
};

export default StoryCommand;