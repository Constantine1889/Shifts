import { makeAutoObservable } from "mobx";

// temporary structures
const map = new Map([[ 'sunday',[
    {
        startTime:'7:00',
        endTime:'15:00',
        employee:'Name'
    },
    {
        startTime:'15:00',
        endTime:'22:00',
        employee:'Name'
    },
    {
        startTime:'22:00',
        endTime:'7:00',
        employee:'Name'
    },
]],
[ 'monday',[
    {
        startTime:'7:00',
        endTime:'15:00',
        employee:'Name'
    },
    {
        startTime:'15:00',
        endTime:'22:00',
        employee:'Name'
    },
    {
        startTime:'22:00',
        endTime:'7:00',
        employee:'Name'
    },
]],
[ 'tuesday',[
    {
        startTime:'7:00',
        endTime:'15:00',
        employee:'Name'
    },
    {
        startTime:'15:00',
        endTime:'22:00',
        employee:'Name'
    },
    {
        startTime:'22:00',
        endTime:'7:00',
        employee:'Name'
    },
]],
[ 'wensday',[
    {
        startTime:'7:00',
        endTime:'15:00',
        employee:'Name'
    },
    {
        startTime:'15:00',
        endTime:'22:00',
        employee:'Name'
    },
    {
        startTime:'22:00',
        endTime:'7:00',
        employee:'Name'
    },
]],
[ 'thursday',[
    {
        startTime:'7:00',
        endTime:'15:00',
        employee:'Name'
    },
    {
        startTime:'15:00',
        endTime:'22:00',
        employee:'Name'
    },
    {
        startTime:'22:00',
        endTime:'7:00',
        employee:'Name'
    },
]],
])

const emps = [
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
    {
        name:'Employee Name',
        currentShifts:5,
        maxShifts:6
    },
]

export default class ScheduleStore{
    constructor(){
       this._schedule = {
            pos1:map,

    }
    this._employees = emps
    this._selectedEmployee = {}
        this._selectedSite = {}     
        makeAutoObservable(this)
    }

    setPosition(position) {
        this._schedule.position['name'] =  position
    }

    setDay(positoinName,dayName) {
        this._schedule[`${positoinName}`].set(dayName[`${dayName}`],dayName[`${dayName.shifts}`])
    } 

    setEmployees(employees){
        this._employees = employees
    }

    setSelectedEmployee(employee) {
        this._selectedEmployee = employee
    }

    get employees() {
        return this._employees
    }

    get selectedEmployee() {
        return this._selectedEmployee
    }

    get schedule() {
        return this._schedule
    }

    get positionNames() {
       return Object.keys(this._schedule) 
    }
}