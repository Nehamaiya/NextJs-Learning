import Link from 'next/link'

function example1()
{
    const example = [
        { id: 'neha', name: 'New name' },
        { id: '1234', name: 'Number' },
  
      ];
    return (
        <div>
            <p> Nested Paths and Routes in an organized way</p>
            <ul>


        {example.map((example) => (
          <li key={example.id}>
            <Link
              href={{
                pathname: '/portfolio/[example.id]',
                query: { id: example.id }
               
              }}
            >
              {example.name}
            </Link>
          
          </li>
        ))}

            </ul>
        </div>
    )

}
export default example1;