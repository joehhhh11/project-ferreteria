import { createStore } from 'redux';

// Reducer para manejar el contador
function counterReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        case 'DECREMENT':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
}

// Función para guardar el estado en localStorage
function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (e) {
        console.error("No se pudo guardar el estado", e);
    }
}

// Función para cargar el estado desde localStorage
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) return undefined; // Si no hay estado guardado
        return JSON.parse(serializedState);
    } catch (e) {
        console.error("No se pudo cargar el estado", e);
        return undefined;
    }
}

// Cargar el estado inicial desde localStorage
const persistedState = loadFromLocalStorage();

// Crear la tienda (store) de Redux
const store = createStore(counterReducer, persistedState);

// Suscribirse a cambios del estado y guardarlo en localStorage
store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

// Exportar la tienda para poder usarla en diferentes páginas
export default store;
