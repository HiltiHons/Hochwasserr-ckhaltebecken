import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import Aufgabenstellung from '../Aufgabenstellung.vue'
import Dokumentation from '../Dokumentation.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: TheWelcome
    },
    {
        path: '/aufgabenstellung',
        name: 'Aufgabenstellung',
        component: Aufgabenstellung
    },
    {
        path: '/dokumentation',
        name: 'Dokumentation',
        component: Dokumentation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
