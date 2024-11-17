import { useEffect , useState } from "react";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch("https://6738bb0d4eb22e24fca8cdd1.mockapi.io/Users");
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setUsers(data); 
            console.log(data);
            
          } catch (err) {
            setError(err.message); 
          } finally {
            setLoading(false); 
          }
        };
    
        fetchUsers();
      }, []);

      
  return (
   {users , loading , error}
  )
}

export default Users
