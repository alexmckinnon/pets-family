import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pets: []
    },
    mutations: {

    },
    getters: {
        getPets: state => {
            return [
                {type: 'cat', name: 'Sprite', image: 'img src'}
            ]
        }
    },
    actions: {

    }
});
