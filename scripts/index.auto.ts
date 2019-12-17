import ADD_ICON from "../images/add.png";
import { MissionContext } from "./module/state/missionContext";

const ARK_NIGHTS = 'com.hypergryph.arknights'

class Index {
    constructor() {
    }

    static main() {
        let mission = new MissionContext()
        images.requestScreenCapture()
        
        let launch_result = app.launchPackage(ARK_NIGHTS)
        if(launch_result){
            mission.start()
        }else{
            toast('启动失败')
        }
    }
}


Index.main();
