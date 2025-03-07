import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NavbarOptions() {
  const { topic } = useParams();
  const [data, setData] = useState([]);

  const url = "https://en.wikipedia.org/w/api.php";
  const params = {
    action: "query",
    list: "search",
    srsearch: topic,
    format: "json",
    origin: "*",
  };
  useEffect(() => {
    axios
      .get(url, { params, withCredentials: false })
      .then((response) => {setData(response.data.query.search)
        console.log(data)
      })
      .catch((error) => console.error("error from NavbarOptions component ", error));
  }, []);

  return (
    <div className="container">
        ram
        <div className="container">
    {
        data.map(ele => (
            <div key={ele.title}>
                <h2>{ele.title}</h2>
                {/* Use dangerouslySetInnerHTML to render HTML */}
                <p dangerouslySetInnerHTML={{ __html: ele.snippet }}></p>
            </div>
        ))
    }
</div>

    </div>
  );
}

export default NavbarOptions;
