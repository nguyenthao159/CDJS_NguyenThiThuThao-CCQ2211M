import React from "react";
import HeaderContent from "../../../layouts/LayoutAdmin/Header";
import db from "../../../database.json";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";

const Product = () => {
  const { products } = db;
  return (
    <>
      <HeaderContent title="Quản lý sản phẩm" />
      <div>
        <table className="table table-bordered table-hover">
          <thead>
            <tr className="text-capitalize">
              <th className="text-center">#</th>
              <th className="text-center">id</th>
              <th>Ảnh</th>
              <th>Danh mục</th>
              <th>Thương hiệu</th>
              <th>Tên sản phẩm</th>
              <th>slug</th>
              <th>Giá</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.length > 0 &&
              products.map((item) => (
                <tr key={item.id}>
                  <td className="text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="text-center">{item.id}</td>
                  <td>
                    <img src={item.image} alt={item.image} />
                  </td>
                  <td>{item.category_id}</td>
                  <td>{item.brand_id}</td>
                  <td>{item.name}</td>
                  <td>{item.slug}</td>
                  <td>{item.pricesale ? item.pricesale : item.price}</td>
                  <td style={{ width: "15%" }}>
                    <div className="d-flex align-items-center justify-content-center gap-2">
                      <Link
                        to={`/admin/product/edit/${item.id}`}
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
    </>
  );
};

export default Product;
