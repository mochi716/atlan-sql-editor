import { createSlice } from '@reduxjs/toolkit'
import { getHistoryTime, getIndexFromId } from '../utils/helper'

const initialState = {
    histories: [
                {id: 1, title: 'test', query: 'Select * From customers', time: '11:24', color: 'blue'},
                {id: 2, title: 'from customer', query: 'Select * From orders', time: '10:21', color: 'red'},
                {id: 3, title: 'detail orders', query: 'Select price, date, time From order_details', time: '09:24', color: 'yellow'},
                {id: 4, title: 'order relation with details', query: 'Select * From order_details', time: '09:24', color: 'yellow'},
                {id: 5, title: 'from customers', query: 'Select id, name From customers', time: '09:24', color: 'blue'},
                {id: 6, title: 'test', query: 'Select * From customers', time: '11:24', color: 'blue'},
                {id: 7, title: 'from customer', query: 'Select * From orders', time: '10:21', color: 'red'},
                {id: 8, title: 'detail orders', query: 'Select price, date, time From order_details', time: '09:24', color: 'yellow'},
                {id: 9, title: 'order relation with details', query: 'Select * From order_details', time: '09:24', color: 'yellow'},
                {id: 10, title: 'from customers', query: 'Select id, name From customers', time: '09:24', color: 'blue'},
                {id: 11, title: 'test', query: 'Select * From customers', time: '11:24', color: 'blue'},
                {id: 12, title: 'from customer', query: 'Select * From orders', time: '10:21', color: 'red'},
                {id: 13, title: 'detail orders', query: 'Select price, date, time From order_details', time: '09:24', color: 'yellow'},
                {id: 14, title: 'order relation with details', query: 'Select * From order_details', time: '09:24', color: 'yellow'},
                {id: 15, title: 'from customers', query: 'Select id, name From customers', time: '09:24', color: 'blue'},
                ],
    maxTabId: 16,
    openedTabs: [],
    openedHistories: [],
    activeId: 0,
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    createTab: (state) => {
      state.maxTabId += 1
      state.openedTabs.push({id: state.maxTabId, title: 'untitled', query: ''})
      state.activeId = state.maxTabId
    },
    openTab: (state, action) => {
        let ind = getIndexFromId(state.openedTabs, action.payload.id)
        if(ind === -1){
            state.openedTabs.push({id: action.payload.id, title: action.payload.title, query: action.payload.query})
            state.openedHistories.push(state.id)
        }
        state.activeId = action.payload.id
    },
    saveTab: (state, action) => {
        let histInd = getIndexFromId(state.histories, action.payload.id);
        if(histInd !== -1){
            state.histories[histInd] = {...state.histories[histInd], title: action.payload.title, query: action.payload.query, time: getHistoryTime()}
        }else{
            state.histories.push({id: action.payload.id, title: action.payload.title, query: action.payload.query, time: getHistoryTime(), color: 'red'});
            state.openedHistories.push(action.payload.id)
        }
        let ind = getIndexFromId(state.openedTabs, action.payload.id)
        state.openedTabs[ind].title = action.payload.title
        state.openedTabs[ind].query = action.payload.query
    },
    setActive: (state, action) => {
        state.activeId = action.payload
    },
    closeTab: (state, action) => {
      let closeActive = state.activeId === action.payload
      for(let i=0;i<state.openedTabs.length;i++){
        if(state.openedTabs[i].id !== action.payload) continue;
        state.openedTabs.splice(i, 1);
        if(!closeActive) break;
        if(state.openedTabs.length === 0){
            state.activeId = 0;
        }else{
            if(i > state.openedTabs.length - 1){
                state.activeId = state.openedTabs[i-1].id;
            }else{
                state.activeId = state.openedTabs[i].id;
            }
        }
        break;
      }
      
      let ind = state.openedHistories.indexOf(action.payload)
      if(ind !== -1){
        state.openedHistories.splice(ind, 1);
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { createTab, openTab, saveTab, closeTab, setActive } = mainSlice.actions

export default mainSlice.reducer