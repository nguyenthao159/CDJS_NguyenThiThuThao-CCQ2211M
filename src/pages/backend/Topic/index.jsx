import React from "react";
import HeaderContent from "../../../layouts/LayoutAdmin/Header";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import db from "../../../database.json";

const Topic = () => {
  const { topic } = db;
  return (
    <>
      <HeaderContent title="Quản lý topic" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Tên</th>
                <th>Slug</th>
                <th>Description</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {topic &&
                topic.length > 0 &&
                topic.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.description}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/topic/edit/${item.id}`}
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

export default Topic;
