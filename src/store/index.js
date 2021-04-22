import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            isLoginOpen :false ,
            isRegOpen:false,
            isMobOpen:false,
            isLoggedIn : true,
            isDark:false,
            authUser:{},
            imgUser : "",
        }
    },
    mutations:{
        setIsLoggedIn(state,data){
            state.isLoggedIn = data
        },
        setAuthUser(state,data){
            state.authUser = data
        },
        setLoginModal(state,data){
            state.isLoginOpen = data
        },
        setRegisterModal(state,data){
            state.isRegOpen = data
        },
        setMobileModal(state,data){
            state.isMobOpen = data
        },
        setDarkModal(state,data){
            state.isDark = data
        },
        setUrlImgUser(state,data){
            state.imgUser = data
        }
    }
})

export default store;
