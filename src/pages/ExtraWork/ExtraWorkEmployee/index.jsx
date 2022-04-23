import React, { useEffect } from "react";

import PageContainer from "../../../layouts/PageContainer";
import { useDispatch, useSelector } from "react-redux";
import { extraworkAction } from "../../../_actions";
import EWEData from "./EWEData"

const ExtraWorkEmployee = (props) => {
  const dispatch = useDispatch();
  

  useEffect(() => {
    if (props.match.params.id) {
      const id = props.match.params.id;
      dispatch(extraworkAction.getSingleExtraWork(id));
    }
  }, [dispatch, props.match.params.id]);

  const data = useSelector((state)=> state.extrawork && state.extrawork.Singleextrawork?state.extrawork.Singleextrawork:[])

  return (
    <PageContainer name="LEAVE DETAILS">
      <EWEData data={data}></EWEData>
    </PageContainer>
  );
};

export default ExtraWorkEmployee;
