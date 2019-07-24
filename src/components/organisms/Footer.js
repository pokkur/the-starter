import FilterLink from '@/components/molecules/FilterLink'
import { VisibilityFilters } from '@/actions'

const Footer = () => (
    <div className="cell">
        <span>Show: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
)

export default Footer
