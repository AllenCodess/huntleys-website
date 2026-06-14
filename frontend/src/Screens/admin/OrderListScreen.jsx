import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import Header from "../../components/Header";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";

function OrderListScreen() {
  const { data: orders, isLoading, error } = useGetOrdersQuery();

  return (
    <>
      <Header />
      <div className="orderlist-container container">
        <h1 className="orderlist-header">Orders</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error?.data?.message || error.error}</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map(function (order) {
                return (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.user && order.user.name}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <FontAwesomeIcon className="fa-Times" icon={faTimes} size="lg" />
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <FontAwesomeIcon className="fa-Times" icon={faTimes} size="lg" />
                      )}
                    </td>
                    <td>
                      <Link to={`/order/${order._id}`}>
                        <button className="orders-details-btn">Details</button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default OrderListScreen;
