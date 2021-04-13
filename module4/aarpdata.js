const aarpevents = [
    {
      id: 'e1',
      title: 'Benefits at Home',
      description:
        'Enjoy the benefits of an AARP membership from the comfort of your home. AARP members have access to free downloads and discounts from the AARP bookstore, as well as members-only webinars and digital workshops. Membership also includes access to online games, recipes, home exercises and activities to keep your mind sharp. Stay in the know on the latest health, tech and entertainment news with AARP The Magazine and the AARP Bulletin delivered right to your door.',
      location: 'New York',
      image: 'images/benefit_at_home.jpeg',
      date: '2023-02-12',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Caregiving',
      description:
        "Caregivers need care, too. AARP membership includes guidance for managing stress and maintaining balance in your life. Plus, connect with a community of caregivers who have similar experiences and needs. Members can give and receive advice and emotional support to a network of your peers on our online forum.",
      location: 'New Wall Street 5, 98765 New Work',
      date: '2021-05-12',
      image: 'images/Caregiving.jpeg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Career & Education',
      description:
        'Put AARP to work for you! Find a job, protect your workplace rights and stay current with changing technology. Membership includes access to job boards, career advice and resources for starting your own business or second career. AARP is also working to strengthen social security, protect pensions and fight age discrimination.',
      location: 'California',
      date: '2022-04-10',
      image: 'images/Career_img_desktop.jpeg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return aarpevents.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return aarpevents;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = aarpevents.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getlistById(id) {
    return aarpevents.find((event) => event.id === id);
  }