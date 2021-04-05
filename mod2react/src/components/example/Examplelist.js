import Exampleitem from './Examplemeetup.js';
import classes from './ExampleList.module.scss';

function Examplelist(props) {
    return (
        <ul className={classes.list}>
            {props.examples.map(example => <Exampleitem 
                key={example.id} 
                id={example.id} 
                image={example.image} 
                title={example.title} 
                address={example.address}
                description={example.description}
                example={example}
            />)}

        </ul>
    );
}

export default Examplelist;