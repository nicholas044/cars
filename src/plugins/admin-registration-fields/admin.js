// ./src/plugins/admin-registration-fields/admin.js
import React, { useState, useEffect } from 'react';
import { TextInput, Textarea } from '@strapi/design-system';

const AdminRegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    phone: '',
    bio: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <TextInput
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        label="Email"
      />
      <TextInput
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        label="Username"
      />
      <TextInput
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        type="password"
        label="Password"
      />
      <TextInput
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
        label="Phone"
      />
      <Textarea
        name="bio"
        value={formData.bio}
        onChange={handleInputChange}
        label="Bio"
      />
      {/* Additional form fields can go here */}
    </div>
  );
};

export default AdminRegistrationForm;
