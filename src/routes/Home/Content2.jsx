import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import VideoPlay from 'react-sublime-video';
//@version 2.0视频设备解决方案-后续完善
//import plyr from 'plyr';
//import '../../components/Plyr/plyr.css'

class Content extends React.Component {

  static defaultProps = {
    className: 'content2',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animation = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
    const videoChildren = '//kquanr.com/files/blog/View_From_A_Blue_Moon_Trailer-HD.mp4',
          videoPoster = '//kquanr.com/files/blog/View_From_A_Blue_Moon_Trailer-HD.jpg';
    return (
      <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={animation}
            component="h1"
            key="h1"
            reverseDelay={300}
            id={`${props.id}-title`}
          >
            一个文青患者的富媒体之路
          </TweenOne>
          <TweenOne
            animation={{ ...animation, delay: 200 }}
            component="p"
            key="p"
            reverseDelay={200}
            id={`${props.id}-content`}
          >
            成长即乐趣。不乎于敲代码、写文章、玩摄影、做视频等等这些事情，可能是花时间付诸于某个交代，或是为了满足未来的某个梦想所要不断为之准备的阶梯。
          </TweenOne>
          <TweenOne
            key="video"
            animation={{ ...animation, delay: 300 }}
            className={`${props.className}-video`}
            id={`${props.id}-video`}
          >
            {isMode ?
              (
                <video
                  controls
                  loop
                  src={videoChildren}
                  poster={videoPoster}
                  width="100%">
                </video>
              )
            :
              (
                <VideoPlay
                  loop
                  src={videoChildren}
                  poster={videoPoster}
                  width="100%" />)
            }
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default Content;