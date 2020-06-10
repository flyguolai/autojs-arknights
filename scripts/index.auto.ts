import ADD_ICON from "../images/add.png";
import { MissionContext } from "./module/state/missionContext";

const ARK_NIGHTS = 'com.hypergryph.arknights'

let height = device.height;
let width = device.width;
log('宽为：' + width + '\n高为：' + height);
setScreenMetrics(height, width);
console.show()

class Index {
    constructor() {

    }

    static main() {
        let mission = new MissionContext()
        images.requestScreenCapture(true)

        let launch_result = app.launchPackage(ARK_NIGHTS)
        if (launch_result) {
            mission.start()
        } else {
            exit()
            console.log('启动失败')
        }
    }
}


Index.main();
