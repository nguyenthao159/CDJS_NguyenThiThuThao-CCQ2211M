import React from "react";
import db from "../../../database.json";
import { Link } from "react-router-dom";
import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
const Category = () => {
  const { categorys } = db;
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex align-items-center justify-content-between mb-5">
                <strong>Quản lý danh mục</strong>
                <Link
                  to="#"
                  className="bg-danger text-white d-flex align-items-center gap-2 py-1 px-2"
                >
                  <CiTrash />
                  <span>Trash</span>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">...</div>
              <div className="col-md-9">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">id</th>
                      <th>image</th>
                      <th>name</th>
                      <th>slug</th>
                      <th>action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categorys &&
                      categorys.length > 0 &&
                      categorys.map((item) => (
                        <tr key={item.id}>
                          <td className="text-center">
                            <input type="checkbox" />
                          </td>
                          <td className="text-center">{item.id}</td>
                          <td>
                            <img src={item.image} alt={item.image} />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.slug}</td>
                          <td style={{ width: "15%" }}>
                            <div className="d-flex align-items-center justify-content-center gap-2">
                              <Link
                                to={`/admin/category/edit/${item.id}`}
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
          </div>
        </div>
      </div>
    </>
  );
};
export default Category;
