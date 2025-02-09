import { useEffect, useState } from "react";
import ReadMore from "../components/read-more-button";

interface Effect {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function MyUseEffectHook() {
  const [tab, setTab] = useState(0);
  const [tabData, setTabData] = useState<Effect | null>();
  const [loading, setLoading] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(
          // "https://jsonplaceholder.typicode.com/todos/" + tab
          `https://jsonplaceholder.typicode.com/todos/${tab}`,
          { signal }
        );
        const data = await res.json();
        setTabData(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [tab]);

  return (
    <div  className="container" >
      <div style={{display:"flex" , alignItems: "center" }}>
      <h4>useEffect</h4>

      <button
        onClick={() => {
          setTab(1);
        }}
        style={{ color: tab == 1 ? "white" : "#404857", margin: "2px" }}
      >
        todo #1
      </button>
      <button
        onClick={() => {
          setTab(2);
        }}
        style={{ color: tab == 2 ? "white" : "#404857", margin: "2px" }}
      >
        todo #2
      </button>
      <button
        onClick={() => {
          setTab(3);
        }}
        style={{ color: tab == 3 ? "white" : "#404857", margin: "2px" }}
      >
        todo #3
      </button>

      <div style={{ color: loading ? "yellow" : "white", marginTop: " 10px" }}>
        {loading ? "loading..." : tabData?.title}
      </div>
      <ReadMore link="https://petal-estimate-4e9.notion.site/5-useEffect-1177dfd10735805081a4d7ef71dddce9" children="notes"/>
      </div>
    </div>
  );
}

export default MyUseEffectHook;
