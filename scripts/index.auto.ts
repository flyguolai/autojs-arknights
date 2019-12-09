import ADD_ICON from "../images/add.png";

class Index {
    constructor() {
    }

    static main() {
        if(images.requestScreenCapture()){
            // toast('请求成功')
            //截图
            var bigImage = images.captureScreen();

            var targetImage = images.fromBase64(ADD_ICON);
            var p = images.findImage(bigImage,targetImage,{
                threshold:0.8
            })
            if(p){
                toast("找到啦"+p)
            }else{
                toast("没找到")
            }
        }
    }
}


Index.main();
