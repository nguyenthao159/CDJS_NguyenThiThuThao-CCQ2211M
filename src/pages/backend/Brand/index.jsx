import React from "react";
import HeaderContent from "../../../layouts/LayoutAdmin/Header";
import db from "../../../database.json";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

const Brand = () => {
  const { brand } = db;
  return (
    <>
      <HeaderContent title="Quản lý thương hiệu" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Ảnh</th>
                <th>Tên thương hiệu</th>
                <th>slug</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {brand &&
                brand.length > 0 &&
                brand.map((item) => (
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
                          to={`/admin/brand/edit/${item.id}`}
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

export default Brand;
