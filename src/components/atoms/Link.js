import PropTypes from 'prop-types'
import styled from 'styled-components'

const Link = ({ active, children, onClick }) => (
    <Button
        onClick={onClick}
        disabled={active}
        style={{
            marginLeft: '4px'
        }}
    >
        {children}
    </Button>
)

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

const Button = styled.button`
    color: initial;
    font-size: 10px;
`

export default Link
