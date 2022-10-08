import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    histories: [
                {id: 1, title: 'test', query: 'Select * From customers', time: '11:24', color: 'blue'},
                {id: 2, title: 'from customer', query: 'Select * From orders', time: '10:21', color: 'red'},
                {id: 3, title: 'detail orders', query: 'Select price, date, time From order_details', time: '09:24', color: 'yellow'},
                {id: 4, title: 'order relation with details', query: 'Select * From order_details', time: '09:24', color: 'yellow'},
                {id: 5, title: 'from customers', query: 'Select id, name From customers', time: '09:24', color: 'blue'},
                ],
    maxTabId: 5,
    openedTabs: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addTab: (state) => {
      state.maxTabId += 1
      state.openedTabs.push({id: state.maxTabId, title: 'untitled', query: ''})
    },
    saveTab: (state, action) => {
        state.histories.push({id: action.id, title: action.title, query: action.query, time: new Date(), color: 'red'});
    },
    closeTab: (state, action) => {
      for(let i=0;i<state.openedTabs.length;i++){
        if(state.openedTabs[i].id === action.id){
            state.openedTabs.splice(i, 1);
            break;
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTab, saveTab, closeTab } = mainSlice.actions

export default mainSlice.reducer