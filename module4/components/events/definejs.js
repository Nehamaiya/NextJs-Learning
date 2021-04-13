
import Joinnow from './buttons/joinow'

import styles from './definejs.module.css';

function definejsx(props)
{
    const { 
        title, image, date, location, id } = props;
    
    const realtimedate = new Date(date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
    });
    const format = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;
    return (
        <li className={styles.item}>
          <img src={'/' + image} alt={title} />
          <div className={styles.content} >
            <div className={styles.summary} >
              <h2>{title}</h2>
              <div className={styles.date}>
             
                <time>{realtimedate}</time>
              </div>
              <div className={styles.address}>
              
                <address>{format}</address>
              </div>
            </div>
            <div className={styles.actions}>
            <Joinnow link={exploreLink}>
            <span>Join Now</span>
            </Joinnow>
         </div>
          </div>
        </li>
      );
    } 


export default definejsx;