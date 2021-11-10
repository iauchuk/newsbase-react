import React, { useEffect } from "react";
import * as _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { getNewsAction } from "../../store/actions/actions";
import NewsTable from "./newsTable/newsTable";

const NewsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNewsAction()(dispatch);
  }, [dispatch]);

  const newsList = useSelector((state) => state.news);
  const isNewsListExist = _.size(newsList) > 0;

  return (
    <div>{isNewsListExist ? <NewsTable items={newsList} /> : <p>Empty</p>}</div>
  );
};

export default NewsPage;
