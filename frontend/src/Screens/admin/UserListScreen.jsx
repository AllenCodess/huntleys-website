import { Link } from "react-router";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useGetUsersQuery, useDeleteUserMutation } from "../../slices/usersApiSlice";

const UserListScreen = () => {
  const { data: users, refetch, isLoading, error } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await deleteUser(id);
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="userlist-container">
        <h1>Users</h1>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : error ? (
          <p className="message message-danger">{error?.data?.message || error.error}</p>
        ) : (
          <table className="users-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ADMIN</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                  </td>
                  <td>
                    {user.isAdmin ? (
                      <FontAwesomeIcon icon={faCheck} style={{ color: "green" }} />
                    ) : (
                      <FontAwesomeIcon icon={faTimes} style={{ color: "red" }} />
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/user/${user._id}/edit`} className="user-edit-btn">
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button className="user-delete-btn" onClick={() => deleteHandler(user._id)}>
                      <FontAwesomeIcon icon={faTrash} style={{ color: "white" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default UserListScreen;
