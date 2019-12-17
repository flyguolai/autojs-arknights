import { IState } from "./interface/IState";
import { MissionContext } from "./missionContext";

import MISSION_READY from "./images/mission_ready.jpg";
import MISSION_SELECT_MENBER from './images/mission_member.jpg'
import MISSION_FIGHTING from './images/mission_fighting.jpg'
import MISSION_COMPLETE from './images/mission_complete.jpg'

import { findImage } from "../../utils/image";
import { SECOND, getRandomSecond } from "../../utils/time";
import { RandomClick } from "../../utils/tap";

export interface IMissionState extends IState{
    nextState: () => void
    stopMission: () => void
    goNextState: (point:Point) => void
}

export class MissionReadyState implements IMissionState {
    context: MissionContext
    constructor(context: MissionContext){
        this.context = context
    }

    checkState(){
        const point = findImage(MISSION_READY)
        if(point){
            this.goNextState(point)
        }else{
            this.stopMission()
        }
    }

    goNextState(point:Point){
        RandomClick(point.x,point.y)
        setTimeout(() => {
            const point = findImage(MISSION_SELECT_MENBER)
            if(point){
                this.nextState()
            }else{
                this.stopMission()
            }
        }, getRandomSecond() + 5)
    }

    nextState(){
        this.context.currentState = this.context.MissionSelectMemberState
    }

    stopMission(){
        this.context.stop()
    }
}

export class MissionSelectMemberState implements IMissionState {
    context: MissionContext
    constructor(context: MissionContext){
        this.context = context
    }

    checkState(){
        const point = findImage(MISSION_SELECT_MENBER)
        if(point){
            this.goNextState(point)
        }else{
            this.stopMission()
        }
    }

    goNextState(point:Point){
        RandomClick(point.x,point.y)
        setTimeout(() => {
            const point = findImage(MISSION_FIGHTING)
            if(point){
                this.nextState()
            }else{
                this.stopMission()
            }
        },getRandomSecond() + 5)
    }

    nextState(){
        this.context.currentState = this.context.MissionFightingState
    }

    stopMission(){
        this.context.stop()
    }
}



export class MissionFightingState implements IMissionState {
    context: MissionContext
    constructor(context: MissionContext){
        this.context = context
    }

    checkState(){
        const fighting_point = findImage(MISSION_FIGHTING)
        const complete_point = findImage(MISSION_COMPLETE)
        if(fighting_point){
            return 
        }

        if(complete_point){
            this.goNextState()
        }

        if(!fighting_point && !complete_point){
            this.stopMission()
        }
    }

    goNextState(){
        this.nextState()
    }

    nextState(){
        this.context.currentState = this.context.MissionFinishState
    }

    stopMission(){
        this.context.stop()
    }
}

export class MissionFinishState implements IMissionState {
    context: MissionContext
    constructor(context: MissionContext){
        this.context = context
    }

    checkState(){
        const point = findImage(MISSION_COMPLETE)
        if(point){
            this.goNextState(point)
        }
        
    }

    goNextState(point: Point){
        RandomClick(Math.random() * device.width,Math.random() * device.height)
        
        setTimeout(() => {
            if(findImage(MISSION_READY)){
                this.nextState()
            }
        },getRandomSecond() + 5)
        
    }

    nextState(){
        this.context.currentState = this.context.MissionReadyState
    }

    stopMission(){
        this.context.stop()
    }
}



// export class MissionNoIntellectState implements IMissionState{
//     context: MissionContext
//     constructor(context: MissionContext){
//         this.context = context
//     }

//     checkState(){
//         const point = findImage(MISSION_SELECT_MENBER)
//         if(point){
//             return 
//         }else{
//             this.goNextState()
//         }
//     }

//     nextState(){
//         this.context.currentState = this.context.MissionFinishState
//     }

//     goNextState(point){

//     }

//     stopMission(){
//         this.context.stop()
//     }
// }