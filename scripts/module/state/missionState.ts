import { IState } from "./interface/IState";
import { MissionContext } from "./missionContext";

import MISSION_READY from "./images/mission_ready.jpg";
import MISSION_SELECT_MENBER from './images/mission_member.jpg'
import MISSION_FIGHTING from './images/mission_fighting.jpg'
import MISSION_COMPLETE from './images/mission_complete.jpg'

import { m_findImage } from "../../utils/image";
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
        console.log('查找开始行动（蓝色）')
        const point = m_findImage(MISSION_READY)
        if(point){
            this.goNextState(point)
        }else{
            this.stopMission()
        }
    }

    goNextState(point:Point){
        RandomClick(point.x,point.y)
        setTimeout(() => {
            const point = m_findImage(MISSION_SELECT_MENBER)
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
        console.log('查找开始行动（红色）')
        const point = m_findImage(MISSION_SELECT_MENBER)
        if(point){
            this.goNextState(point)
        }else{
            this.stopMission()
        }
    }

    goNextState(point:Point){
        RandomClick(point.x,point.y)
        setTimeout(() => {
            const point = m_findImage(MISSION_FIGHTING)
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
        const fighting_point = m_findImage(MISSION_FIGHTING)
        const complete_point = m_findImage(MISSION_COMPLETE)
        if(fighting_point){
            console.log('战斗中')
            return 
        }

        if(complete_point){
            console.log('战斗结束')
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
        console.log('查找战斗结束')
        const point = m_findImage(MISSION_COMPLETE)
        if(point){
            this.goNextState(point)
        }
        
    }

    goNextState(point: Point){
        RandomClick(Math.random() * device.width,Math.random() * device.height)
        
        setTimeout(() => {
            if(m_findImage(MISSION_READY)){
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
//         const point = m_findImage(MISSION_SELECT_MENBER)
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