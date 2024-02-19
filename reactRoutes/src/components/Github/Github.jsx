import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/darshand2223")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="text-center bg-gray-300 text-3xl pd-5 ">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="github-profile-image"></img>
    </div>
  );
}

export default Github;
