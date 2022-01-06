import React from "react";

export default class userapi extends React.Component {
  static async getInitialProps() {
    const getUserData = await fetch("http://localhost:3000/api/hello");
    const dataUser = await getUserData.json();
    return { users: dataUser };
  }

  render() {
    const { users } = this.props;
    return (
      <div className="flex justify-center items-center mt-10">
        <table className="table-auto border-collapse border border-gray-500">
          <tr>
            <th className="border border-gray-600">Avatar</th>
            <th className="border border-gray-600">Name</th>
            <th className="border border-gray-600">Job</th>
            <th className="border border-gray-600">Article</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td className="border border-gray-600 p-5">
                <img src={user.authorAvatar} alt="" />
              </td>
              <td className="border border-gray-600 p-5" key={users.id}>
                {user.authorName}
              </td>
              <td className="border border-gray-600 p-5" key={users.id}>
                {user.authorJob}
              </td>
              <td className="border border-gray-600 p-5" key={users.id}>
                {user.title}
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
