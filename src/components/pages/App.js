import { hot } from 'react-hot-loader'

import Footer from '@/components/organisms/Footer'
import AddTodo from '@/components/organisms/AddTodo'
import VisibleTodoList from '@/components/organisms/VisibleTodoList'

const devMode = process.env.NODE_ENV === 'development'

const App = () => (
    <div className={['grid-x', devMode ? 'is--development' : ''].join(' ')}>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default hot(module)(App)
