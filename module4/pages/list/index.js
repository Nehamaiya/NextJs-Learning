import { Fragment } from 'react';
import { useRouter } from 'next/router';


import { getAllEvents } from '../../aarpdata';

import EventList from '../../components/events/event-list';
import ListSearch from '../../components/events/listsearch';




function Combined() {
    const router = useRouter();
    const events = getAllEvents();
  
    function findEventsHandler(year, month) {
      const fullPath = `/list/${year}/${month}`;
      
      router.push(fullPath);
    }
  
    return (
      <Fragment>
        <ListSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </Fragment>
    );
  }
  export default Combined;