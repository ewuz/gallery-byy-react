require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';


//获取图片相关数组，利用自执行函数将信息转换成图片URL路径信息
let imageDatas = require('../data/imageDatas.json');

imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0, j = imageDatasArr.length; i < j; i++) {
    var singleImageData = imageDatasArr[i];
    
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    
    imageDatasArr[i] = singleImageData;
  }
  
  return imageDatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        
        <section className="img-sec">
  
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        
        </section>
        <nav className="controller-nav">
        
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
