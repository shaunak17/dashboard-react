import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
    },
    reducers: {
        setUsers: (state, action) => {
            state.data = action.payload;
        },
    },
});

export const { setUsers } = userSlice.actions;

export const getUsers = () => dispatch => {
    setTimeout(() => {
        // Api call here
        let data = [{
            "id": 1,
            "name": "test1",
            "age": "11",
            "gender": "male",
            "email": "test1@gmail.com",
            "phoneNo": "9415346313"
        },
        {
            "id": 2,
            "name": "test2",
            "age": "12",
            "gender": "male",
            "email": "test2@gmail.com",
            "phoneNo": "9415346314"
        },
        {
            "id": 3,
            "name": "test3",
            "age": "13",
            "gender": "male",
            "email": "test3@gmail.com",
            "phoneNo": "9415346315"
        },
        {
            "id": 4,
            "name": "test4",
            "age": "14",
            "gender": "male",
            "email": "test4@gmail.com",
            "phoneNo": "9415346316"
        },
        {
            "id": 5,
            "name": "test5",
            "age": "15",
            "gender": "male",
            "email": "test5@gmail.com",
            "phoneNo": "9415346317"
        },
        {
            "id": 6,
            "name": "test6",
            "age": "16",
            "gender": "male",
            "email": "test6@gmail.com",
            "phoneNo": "9415346318"
        }
        ];
        dispatch(setUsers(data));
    }, 1000);
};

export const selectUsers = state => state.users.data;

export default userSlice.reducer;
