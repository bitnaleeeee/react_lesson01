import React, { useState } from 'react';
import './Main.scss';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const StoryCommandInfo = function () {

  return (
    <div className="profileBox">
      <img src="/images/feedimg.jpeg" />
      <div className="info">
        <p className="title">Mardi Mercredi</p>
        <p className="text">마르디</p>
      </div>
    </div>
  )
};

export default StoryCommandInfo;