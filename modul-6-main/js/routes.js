import index from './components/index.vue'
import tambah from './components/tambah.vue'
import edit from './components/edit.vue'

export const routes = [
    {
        name : 'index',
        path : '/',
        component : index
    },
    {
        name : 'tambah',
        path : '/tambah',
        component : tambah
    },
    {
        name : 'edit',
        path : '/edit/:id',
        component : edit
    }
]

