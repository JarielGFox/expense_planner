import './Card.css';

const Card = ({ children, ...props }) => {

    const classes = 'card ' + props.className;

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card;