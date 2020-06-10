export const m_findImage = target => {
  // console.log('请求成功')
  //截图
  var bigImage = images.captureScreen();

  var targetImage = images.fromBase64(target);
  var p = images.findImage(bigImage, targetImage, {
    threshold: 0.8
  });
  if (p) {
    console.log("找到啦" + p);
    console.log('x坐标为：' + p.x + '，y坐标为：' + p.y)
  } else {
    console.log("没找到");
  }
  return p;
};
