import React, { useState } from 'react';
import CommentBox from './CommentBox';
import StoryCommand from './StoryCommand';
import './Main.scss';

const Main = () => {
  return (
    <div>

      <nav className="nav">
        <div className="inner">

          <div className="logo">
            <img src="/images/instagram.png" alt="insta logo" />
            <a href="#">westagram</a>
          </div>

          <div className="search">
            <img src="/images/serch.png" />
            <input type="text" placeholder="검색" />
          </div>

          <div className="utility">
            <div className="utilityBox">
              <a href="#" className="utilityicon"><img src="/images/explore.png" alt="explore" /></a>
              <a href="#" className="utilityicon"><img src="/images/heart.png" alt="like" /></a>
              <a href="#" className="utilityicon"><img src="/images/profile.png" alt="profile" /></a>
            </div>
          </div>
        </div>
      </nav>

      <main className="main">
        <div className="wrap">
          <div className="feeds">

            <article className="article">

              <div className="contentTop">

                <div className="profileBox">
                  <img src="/images/feedimg.jpeg" />
                  <div className="info">
                    <p className="title">Mardi Mercredi</p>
                    <p className="text">마르디</p>
                  </div>
                </div>

                <button className="rightButton">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>

              <img src="/images/feedimg.jpeg" />

              <div className="contentBottom">
                <div className="contentIcon">
                  <div className="iconBox">
                    <button type="button"><img src="/images/like.png" /></button>
                    <button type="button"><img src="/images/comment.png" /></button>
                    <button type="button"><img src="/images/dm.png" /></button>
                  </div>

                  <button type="button" className="link">
                    <img src="/images/share.png" />
                  </button>
                </div>

                <div className="userBox">
                  <img src="/images/feedimg.jpeg" />
                  <span className="text"><strong>bitnalee</strong>님 외 <strong>486명</strong>이 좋아합니다.</span>
                  <ul className="addUl"></ul>
                </div>

                <CommentBox />
              </div>
            </article>

          </div>
          <div className="main-right">

            <div className="myProfile">
              <div className="profileBox">
                <img src="/images/feedimg.jpeg" />
                <div className="info">
                  <p className="title">Mardi Mercredi</p>
                  <p className="text">마르디</p>
                </div>
              </div>
            </div>

            <StoryCommand />
            <StoryCommand />

          </div>
        </div>
      </main >

    </div >

  )
};


export default Main;
