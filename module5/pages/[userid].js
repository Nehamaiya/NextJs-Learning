function UserIdPage(props) {
    return <h1>{props.id}</h1>;
  }
  
  export default UserIdPage;
  
  export async function getServerSideProps(context) {
    const { params } = context;
  
    const userId = params.userid; // userid is the name of the file 
  
    return {
      props: {
        id: 'The user id is ' + userId,
      },
    };
  }
  

  // getserversideprops??? 

