import { IContext } from "./interface/IContext";
import { IMissionState, MissionReadyState, MissionSelectMemberState, MissionFightingState, MissionFinishState } from "./missionState";
import { IState } from "./interface/IState";
import { getRandomSecond, SECOND } from "../../utils/time";


export class MissionContext implements IContext{
    currentState: IState
    interval: number

    MissionReadyState: IMissionState;
    MissionSelectMemberState: IMissionState;
    MissionFightingState: IMissionState;
    MissionFinishState: IMissionState;
    
    constructor(){
        this.MissionReadyState = new MissionReadyState(this);
        this.MissionSelectMemberState = new MissionSelectMemberState(this);
        this.MissionFightingState = new MissionFightingState(this);
        this.MissionFinishState = new MissionFinishState(this);
    }

    start(){
        this.currentState = this.MissionReadyState
        setTimeout(() => {
            this.interval = setInterval(() => {this.currentState.checkState()}, 10 + getRandomSecond() * SECOND)
        },5)
    }

    stop(){
        clearInterval(this.interval);

        this.currentState = this.MissionReadyState
    }
}