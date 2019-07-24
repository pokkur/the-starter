import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '@/reducers'
import App from '@/components/pages/App'
import '@/assets/style/style.scss'

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
