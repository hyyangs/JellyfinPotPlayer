// ==UserScript==
// @name         JellyfinPotplayer
// @version      1.0.0
// @description  JellyfinPotplayer
// @author       hyyangs
// @match        */web/index.html
// ==/UserScript==

(function() {
  'use strict';

  let jellyfinIp = '127.0.0.1:8096';

  let apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

  let openPotplayer = (item) => {
    let streamURL = 'http://'+jellyfinIp+'/Items/'+item.getAttribute('data-id')+'/Download%3Fapi_key='+apiKey;
    window.open('potplayer://' + streamURL);
  }

  let bindEvent = async () => {
    let buttons = [];
    let retry = 6 + 1;
    while (buttons.length == 0 && retry > 0) {
      await new Promise(resolve => setTimeout(resolve, 500));
      buttons = document.querySelectorAll('[data-mode=play],[data-mode=resume],[data-action=resume]');
      retry -= 1;
    }
    for (let button of buttons) {
      let nextElementSibling = button.nextElementSibling;
      let parentElement = button.parentElement;
      let outerHTML = button.outerHTML;
      button.parentElement.removeChild(button);
      let newButton = document.createElement('button');
      if (nextElementSibling) {
        parentElement.insertBefore(newButton, nextElementSibling);
      } else {
        parentElement.append(newButton);
      }
      newButton.outerHTML = outerHTML;
    }
    buttons = document.querySelectorAll('[data-action=resume]');
    for (let button of buttons) {
      button.removeAttribute('data-action');
      button.addEventListener('click', e => {
        e.stopPropagation();
        let item = e.target;
        while (item.getAttribute('class')!='preload layout-desktop' && item.getAttribute('data-id')==null) {
          item = item.parentNode;
        }
        if(item.getAttribute('class')!='preload layout-desktop'){
          openPotplayer(item);
        }else{
          if(document.getElementsByClassName('button-flat btnUserRating detailButton emby-button')[0] != null){
            item = document.getElementsByClassName('button-flat btnUserRating detailButton emby-button')[0];
          }else{
            item = document.getElementsByClassName('button-flat btnUserRating detailButton emby-button ratingbutton-withrating')[0];
          }
          openPotplayer(item);
        }
      });
    }
  };

  let lazyload = () => {
    let items = document.querySelectorAll('[data-src].lazy');
    let y = document.scrollingElement.scrollTop;
    let intersectinglist = [];
    for (let item of items) {
      let windowHeight = document.body.offsetHeight;
      let itemTop = item.getBoundingClientRect().top;
      let itemHeight = item.offsetHeight;
      if (itemTop + itemHeight >= 0 && itemTop <= windowHeight) {
        intersectinglist.push(item);
      }
    }
    for (let item of intersectinglist) {
      item.style.setProperty('background-image', `url("${item.getAttribute('data-src')}")`);
      item.classList.remove('lazy');
      item.removeAttribute('data-src');
    };
  };

  window.addEventListener('scroll', lazyload);

  window.addEventListener('viewshow', async() => {
    bindEvent();
    window.addEventListener('hashchange', bindEvent);
  });
})();
