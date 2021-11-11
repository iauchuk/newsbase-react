import React, { useEffect } from "react";
import { CustomTable } from "../../customTable/customTable";
import { columnConfig } from "../../../constants/mocks/newsTableConfigConsts";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import * as _ from "lodash";
import { Typography } from "@mui/material";
import { getNews } from "../../../store/news/news.action";
import { newsTableLabels } from "./newsTable.labels";

const NewsTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNews()(dispatch);
  }, [dispatch]);

  const newsList = useSelector(
    (state: StoreStateInterface) => state?.news?.newsList ?? []
  );
  const isNewsListExist = !_.isEmpty(_.compact(newsList));

  return (
    <div>
      {isNewsListExist ? (
        <CustomTable rows={newsList} columns={columnConfig} />
      ) : (
        <Typography>{newsTableLabels.emptyList}</Typography>
      )}
    </div>
  );
};

export default NewsTable;
