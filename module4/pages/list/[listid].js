import { useRouter } from 'next/router';
import { getlistById } from '../../aarpdata';
import { Fragment } from 'react';

import ErrorAlert from '../../components/error/error';
function listdetail() {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getlistById(eventId);

    if (!event) {
        return (
          <ErrorAlert>
            <p>No Information found</p>
          </ErrorAlert>
        );
      }

      return (
        <Fragment>
            
       title={event.title} 
        
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}
      
         
            <p>{event.description}</p>
    
        </Fragment>
      );
      

  }
  export default listdetail;