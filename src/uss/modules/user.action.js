import { userConstants } from './user.constant'

export const userActions = {
    register, list, detail, login, logout, update, remove
}

const register = user => dispatch =>{

    const request = user => {type: userConstants.REGISTER_REQUEST, user}
    const success = user => {type: userConstants.REGISTER_SUCCESS, user}
    const failure = user => {type: userConstants.REGISTER_FAILURE, user}
}
const list = count => dispatch =>{
    
    const request = user => {type: userConstants.LIST_REQUEST, count}
    const success = user => {type: userConstants.LIST_SUCCESS, count}
    const failure = user => {type: userConstants.LIST_FAILURE, count}
}
const detail = userid => dispatch =>{
    
    const request = user => {type: userConstants.DETAIL_REQUEST, userid}
    const success = user => {type: userConstants.DETAIL_SUCCESS, userid}
    const failure = user => {type: userConstants.DETAIL_FAILURE, userid}
}
const login = user => dispatch =>{
    
    const request = user => {type: userConstants.LOGIN_REQUEST, user}
    const success = user => {type: userConstants.LOGIN_SUCCESS, user}
    const failure = user => {type: userConstants.LOGIN_FAILURE, user}
}
const update = user => dispatch =>{
    
    const request = user => {type: userConstants.UPDATE_REQUEST, user}
    const success = user => {type: userConstants.UPDATE_SUCCESS, user}
    const failure = user => {type: userConstants.UPDATE_FAILURE, user}
}
const remove = user => dispatch =>{
    
    const request = user => {type: userConstants.REMOVE_REQUEST, user}
    const success = user => {type: userConstants.REMOVE_SUCCESS, user}
    const failure = user => {type: userConstants.REMOVE_FAILURE, user}
}
