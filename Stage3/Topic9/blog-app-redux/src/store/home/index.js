import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  loading:false,
  blogs:[],
  blog:null,
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    increment: (state, action) => {

      state.value += action.payload
    },

    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload
    },

    setBlogs: (state, action) => {
      state.blogs = action.payload
      state.loading = false
    },

    removeBlog: (state, action) => {
      state.blogs = state.blogs.filter(b => b.id != action.payload)
    },

    setBlog: (state, action) => {
      state.blog = action.payload
      state.loading = false
    },

    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, setLoading, setBlogs, setBlog, removeBlog } = homeSlice.actions

export default homeSlice.reducer