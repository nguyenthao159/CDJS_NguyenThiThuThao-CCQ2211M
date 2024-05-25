import React from "react";
import HeaderContent from "../../../layouts/LayoutAdmin/Header";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import db from "../../../database.json";

const User = () => {
  const { user } = db;
  return (
    <>
      <HeaderContent title="Quản lý người dùng" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Ảnh</th>
                <th>Tên</th>
                <th>Username</th>
                <th>Password</th>
                <th>Email</th>
                <th>Số điện thoại</th>
                <th>Địa chỉ</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.length > 0 &&
                user.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td>
                      <img src={item.image} alt={item.image} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.password}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/user/edit/${item.id}`}
                          className="btn btn-info text-white"
                        >
                          <FaRegEdit />
                        </Link>
                        <button className="btn btn-danger text-white">
                          <CiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
