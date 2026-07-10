import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    skills: "",
    github: "",
    linkedin: "",
  });

  const [profileImage, setProfileImage] = useState(
    localStorage.getItem("profileImage") || ""
  );

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));

    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
      localStorage.setItem("profileImage", reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    alert("✅ Profile Saved Successfully!");
  };

  return (
    <div
      className="d-flex"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <div
        className="flex-grow-1"
        style={{
          marginLeft: "260px",
          padding: "30px",
          transition: "0.3s",
        }}
      >
        <Topbar />

        <div className="card shadow-lg border-0 rounded-4 mt-4">
          <div className="card-body p-4">

            <h3 className="fw-bold mb-4">
              👤 My Profile
            </h3>

            {/* Profile Image */}

            <div className="text-center mb-4">

              <img
                src={
                  profileImage ||
                  "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="Profile"
                className="rounded-circle shadow border"
                style={{
                  width: "170px",
                  height: "170px",
                  objectFit: "cover",
                }}
              />

              <div className="mt-3">

                <label
                  htmlFor="profileImage"
                  className="btn btn-outline-primary"
                >
                  📷 Change Photo
                </label>

                <input
                  id="profileImage"
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />

              </div>

            </div>

            <div className="row">

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  College
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="college"
                  value={profile.college}
                  onChange={handleChange}
                />

              </div>

              <div className="col-12 mb-3">

                <label className="form-label">
                  Skills
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="skills"
                  value={profile.skills}
                  onChange={handleChange}
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  GitHub
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="github"
                  value={profile.github}
                  onChange={handleChange}
                  placeholder="https://github.com/username"
                />

              </div>

              <div className="col-md-6 mb-3">

                <label className="form-label">
                  LinkedIn
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="linkedin"
                  value={profile.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/username"
                />

              </div>

            </div>

            <div className="text-center mt-4">

              <button
                className="btn btn-primary px-4"
                onClick={handleSave}
              >
                💾 Save Profile
              </button>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
}

export default Profile;