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
                {type: 'cat', name: 'Sprite', position: 'bottom', description: 'Big Guy! Loves warm places, being carried, and cuddling on your lap', image: 'sprite.jpg', background: 'blue'},
                {type: 'cat', name: 'Quinn', position: 'top', description: 'Little Bear! The sweetest little girl <3', image: 'quinn.jpg', background: 'pink'},
                {type: 'cat', name: 'Panther', position: 'top', description: 'Wittle Guy! Always caught with his tongue out.', image: 'panther.jpg', background: 'orange'},
                {type: 'dog', name: 'Burt', position: 'bottom', description: 'Burt Dog <3', image: 'burt.jpg', background: 'violet'},
            ]
        }
    },
    actions: {

    }
});
