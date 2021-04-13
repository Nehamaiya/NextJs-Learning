import Definejsx from './definejs'
import styles from './event-list.module.css';

function EventList(props) {
    const { items } = props;
      // output multiple list item - jsx
    return (
      <ul className={styles.listbox}>
      
        {items.map((event) => (
          <Definejsx
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        ))}
      </ul>
    );
  }
  
  export default EventList;