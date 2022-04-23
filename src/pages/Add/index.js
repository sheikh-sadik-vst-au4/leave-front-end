import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { Helmet } from "react-helmet";
import { useSnackbar } from "notistack";
import {
  leaveTypeAction,
  departmentAction,
  designationAction,
} from "../../_actions";
import AddDepartment from "./Department";
import AddDesignation from "./Designation";
import AddLeaveType from "./LeaveType";
import LeaveTypeModal from "./LeaveType/Modal";
import LeaveTypeUpdateModal from "./LeaveType/UpdateModal";
import DepartmentModal from "./Department/Modal";
import DepartmentUpdateModal from "./Department/UpdateModal";
import DepartmentDeleteModal from "./Department/DeleteModal";
import DepartmentRemoveModal from "./Department/RemoveModal";
import DesignationModal from "./Designation/Modal";
import DesignationUpdateModal from "./Designation/UpdateModal";
import DesignationDeleteModal from "./Designation/DeleteModal";
import DesignationRemoveModal from "./Designation/RemoveModal";
import PageContainer from "../../layouts/PageContainer";

const Add = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [openDepartmentModal, setOpenDepartmentModal] = useState(false);
  const [openDepartmentUpdateModal, setOpenDepartmentUpdateModal] =
    useState(false);
  const [openDepartmentDeleteModal, setOpenDepartmentDeleteModal] =
    useState(false);
  const [openDepartmentRemoveModal, setOpenDepartmentRemoveModal] =
    useState(false);
  const [openDesignationModal, setOpenDesignationModal] = useState(false);
  const [openDesignationUpdateModal, setOpenDesignationUpdateModal] =
    useState(false);
  const [openDesignationDeleteModal, setOpenDesignationDeleteModal] =
    useState(false);
  const [openDesignationRemoveModal, setOpenDesignationRemoveModal] =
    useState(false);
  const [openLeaveTypeModal, setOpenLeaveTypeModal] = useState(false);
  const [openLeaveTypeUpdateModal, setOpenLeaveTypeUpdateModal] =
    useState(false);
  const [singleDepartment, setSingleDepartment] = useState({});
  const [singleDesignation, setSingleDesignation] = useState({});
  const [singleLeaveType, setSingleLeaveType] = useState({});
  const [departmentId, setDepartmentId] = useState("");
  const [designationId, setDesignationId] = useState("");
  const [confirm, setConfirm] = useState(false)
  const [confirmdesignation, setConfirmdesignation] = useState(false)


  const alert = useSelector((state) => state.alert);
  const departments = useSelector((state) =>
    state.departments ? state.departments.departments : []
  );
  const checkDepartments = useSelector((state) =>
    state.departments && state.departments.check
      ? state.departments.check.canDelete
      : ""
  );
  const checkDesignations = useSelector((state) =>
    state.designations && state.designations.check
      ? state.designations.check.canDelete
      : ""
  );
  const designations = useSelector((state) =>
    state.designations ? state.designations.designations : []
  );
  const leaveTypes = useSelector((state) =>
    state.leaveTypes ? state.leaveTypes : []
  );

  const handleCloseModal = () => {
    setOpenDepartmentUpdateModal(false);
    setOpenDesignationUpdateModal(false);
    setOpenLeaveTypeUpdateModal(false);
    setOpenDepartmentDeleteModal(false);
    setOpenDesignationDeleteModal(false);
    setOpenDepartmentRemoveModal(false);
    setOpenDesignationRemoveModal(false);
  };

  const handleClickOpen = (value) => {
    switch (value) {
      case "department":
        return setOpenDepartmentModal(true);
      case "designation":
        return setOpenDesignationModal(true);
      case "leavetype":
        return setOpenLeaveTypeModal(true);
      default:
        return;
    }
  };

  const handleClose = () => {
    setOpenDepartmentModal(false);
    setOpenDesignationModal(false);
    setOpenLeaveTypeModal(false);
  };
  useEffect(() => {
    dispatch(departmentAction.getDepartments());
    dispatch(designationAction.getDesignations());
    dispatch(leaveTypeAction.getLeaveType());
  }, [dispatch]);

  useEffect(() => {
    if (alert.status) {
      enqueueSnackbar(alert.message, {
        variant: alert.type,
        autoHideDuration: 3000,
      });
    }
  }, [alert, enqueueSnackbar]);

  useEffect(() => {
    if (checkDesignations === true) {
      setOpenDesignationDeleteModal(true);
    } else if (checkDesignations === false) {
      setOpenDesignationRemoveModal(true);
      setConfirmdesignation(false)
    }
  }, [checkDesignations]);

  useEffect(() => {
    if (checkDepartments === true) {
      setOpenDepartmentDeleteModal(true);
    } else if (checkDepartments === false) {
      setOpenDepartmentRemoveModal(true);
      setConfirm(false)
    }
  }, [checkDepartments]);

  const handleClick = () =>{
    if(confirm === false){
      setConfirm(true)
    }
   
  
  }

  const handleClickdesignation = () =>{
    if(confirmdesignation === false){
      setConfirmdesignation(true)
    }
   
  
  }

  const deleteDepartment = (ID) => {
    // dispatch(departmentAction.deleteDepartment(ID));
    dispatch(departmentAction.getDepartmentCheck(ID));
    setDepartmentId(ID);
  };

  const deleteDepartmentById = () => {
    dispatch(departmentAction.deleteDepartment(departmentId));
    setOpenDepartmentDeleteModal(false);
  };

  const editDepartment = (ID) => {
    departments.map((dept) => {
      if (dept._id === ID) {
        return setSingleDepartment({ ...dept });
      }
      return null;
    });
    setOpenDepartmentUpdateModal(true);
  };

  const deleteDesignation = (ID) => {
    dispatch(designationAction.getDesignationCheck(ID));
    setDesignationId(ID);
    // dispatch(designationAction.deleteDesignation(ID));
  };

  const deleteDesignationById = () => {
    dispatch(designationAction.deleteDesignation(designationId));
    setOpenDesignationDeleteModal(false);
  };

  const editDesignation = (ID) => {
    designations.map((designation) => {
      if (designation._id === ID) {
        return setSingleDesignation({ ...designation });
      }
      return null;
    });
    setOpenDesignationUpdateModal(true);
  };

  const deleteLeaveType = (event) => {
    let ID = event.target.value;
    dispatch(leaveTypeAction.deleteLeaveType(ID));
  };

  const editLeaveType = (ID) => {
    leaveTypes.map((leaveType) => {
      if (leaveType._id === ID) {
        return setSingleLeaveType({ ...leaveType });
      }
      return null;
    });
    setOpenLeaveTypeUpdateModal(true);
  };

  
  return (
    <React.Fragment>
      <Helmet>
        <title>ADD | JPLOFT</title>
      </Helmet>
      <PageContainer pageheading="ADD">
        <Grid container spacing={2}>
          <Grid item sm={4} xs={12}>
            <AddDepartment
              handleClickOpen={handleClickOpen}
              departments={departments}
              deleteDepartment={deleteDepartment}
              editDepartment={editDepartment}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <AddDesignation
              handleClickOpen={handleClickOpen}
              designations={designations}
              deleteDesignation={deleteDesignation}
              editDesignation={editDesignation}
            />
          </Grid>
          <Grid item sm={4} xs={12}>
            <AddLeaveType
              handleClickOpen={handleClickOpen}
              leaveTypes={leaveTypes}
              deleteLeaveType={deleteLeaveType}
              editLeaveType={editLeaveType}
            />
          </Grid>

          <DepartmentModal
            openDepartmentModal={openDepartmentModal}
            handleClose={handleClose}
          />
          <DesignationModal
            openDesignationModal={openDesignationModal}
            handleClose={handleClose}
          />
          <LeaveTypeModal
            openLeaveTypeModal={openLeaveTypeModal}
            handleClose={handleClose}
          />

          <DepartmentUpdateModal
            open={openDepartmentUpdateModal}
            handleClose={handleCloseModal}
            singleDepartment={singleDepartment}
          />
          <DesignationUpdateModal
            handleClose={handleCloseModal}
            open={openDesignationUpdateModal}
            singleDesignation={singleDesignation}
          />
          <LeaveTypeUpdateModal
            handleClose={handleCloseModal}
            open={openLeaveTypeUpdateModal}
            singleLeaveType={singleLeaveType}
          />
          <DepartmentDeleteModal
            handleClose={handleCloseModal}
            open={openDepartmentDeleteModal}
            deleteDepartmentById={deleteDepartmentById}
          />
          <DesignationDeleteModal
            handleClose={handleCloseModal}
            open={openDesignationDeleteModal}
            deleteDesignationById={deleteDesignationById}
          />
          <DepartmentRemoveModal
            handleClose={handleCloseModal}
            open={openDepartmentRemoveModal}
            departmentsList={departments}
            previousDepartmentId={departmentId}
            handleClick={handleClick}
            confirm={confirm}
          />
          <DesignationRemoveModal
            handleClose={handleCloseModal}
            open={openDesignationRemoveModal}
            designationsList={designations}
            previousDesignationId={designationId}
            handleClickdesignation={handleClickdesignation}
            confirmdesignation={confirmdesignation}
          />
        </Grid>
      </PageContainer>
    </React.Fragment>
  );
};

export default connect()(Add);
