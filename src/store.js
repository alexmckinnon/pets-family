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
                {type: 'cat', name: 'Sprite', image: 'sprite.jpg', background: 'blue'},
                {type: 'cat', name: 'Quinn', image: 'quinn.jpg', background: 'pink'},
                {type: 'cat', name: 'Panther', image: 'panther.jpg', background: 'orange'},
            ]
        }
    },
    actions: {

    }
});
