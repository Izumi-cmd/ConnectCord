import React, { useState } from "react";

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="name">
          名前
        </label>
        <input
          className="form-input"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          placeholder="名前"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="form-input"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          placeholder="メールアドレス"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="phone">
          電話番号
        </label>
        <input
          className="form-input"
          type="text"
          name="phone"
          id="phone"
          value={formData.phone}
          placeholder="電話番号"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn form-button" type="submit">
          QRコード生成
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
