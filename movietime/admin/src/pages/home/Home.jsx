import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios"

export default function Home() {

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await axios.get("/users/stats", {
            headers: {
              token:
                    "Ameya eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjQzNWY2ZTVkYTQ4NTc1N2IxOTBiMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDE1Mjg5NSwiZXhwIjoxNjkwNTg0ODk1fQ.RkCnLcb2tBEHJyehsyuPMl5eBW7lurMi3iHFBgd-22Y",
                  },
                });
                const statsArray = res.data.sort(function(a,b){
                  return a._id - b._id;
                });
                statsArray.map((item) =>
                  setUserStats((prev) => [
                    ...prev,
                    { name: MONTHS[item._id - 1], "New User": item.total },
                  ])
                );
              } catch (err) {
                console.log(err);
              }
            };
            getStats();
          }, [MONTHS]);
    console.log(userStats);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
