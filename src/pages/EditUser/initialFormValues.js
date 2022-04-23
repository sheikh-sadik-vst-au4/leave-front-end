export const currentUserValue = (currentUserData) => {
  if (currentUserData) {
 
    const currentUserValues = currentUserData[0];
    const AccountValue = AccountExist(currentUserValues && currentUserValues.account ?currentUserValues.account:'');
    const AddressValue = AddressExist(currentUserValues && currentUserValues.address? currentUserValues.address :'');
    
    const initialValues = {
     name: currentUserValues && currentUserValues.name ?currentUserValues.name:'',
      
      gender: currentUserValues && currentUserValues.gender ?currentUserValues.gender:'',
      dob: currentUserValues && currentUserValues.dob ? currentUserValues.dob : "",
      email: currentUserValues && currentUserValues.email ? currentUserValues.email :'',
      phoneNo: currentUserValues && currentUserValues.phoneNo ? currentUserValues.phoneNo :'',
      designation: currentUserValues && currentUserValues.designation && currentUserValues.designation._id?currentUserValues.designation._id:'',
      department: currentUserValues && currentUserValues.department && currentUserValues.department._id?currentUserValues.department._id:'',
      joiningDate: currentUserValues && currentUserValues.joiningDate?currentUserValues.joiningDate:'',
      probationEnd: currentUserValues && currentUserValues.probationEnd?currentUserValues.probationEnd:'',
      personalEmail: currentUserValues && currentUserValues.personalEmail?currentUserValues.personalEmail:'',
      accountNo: AccountValue && AccountValue.accountNo?AccountValue.accountNo:'',
      ifscCode: AccountValue && AccountValue.ifscCode?AccountValue.ifscCode:'',
      bankName: AccountValue && AccountValue.bankName?AccountValue.bankName:'',
      addressVal: AddressValue && AddressValue.val?AddressValue.val:'',
      city: AddressValue && AddressValue.city?AddressValue.city:'',
      pincode: AddressValue && AddressValue.pincode? AddressValue.pincode:'',
      state: AddressValue && AddressValue.state && AddressValue.state._id?AddressValue.state._id:'',
      country: AddressValue && AddressValue.country && AddressValue.country._id?AddressValue.country._id:'',
    };
    return initialValues;
  } else {
    return {};
  }
};

const AccountExist = (account) => {
  let accountDetail = {
    accountNo: "",
    ifscCode: "",
    bankName: "",
  };

  if (account) {
    accountDetail.accountNo = account.accountNo;
    accountDetail.ifscCode = account.ifscCode;
    accountDetail.bankName = account.bankName;
    return accountDetail;
  } else {
    return accountDetail;
  }
};

const AddressExist = (address) => {
  let addressDetail = {
    val: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  };

  if (address) {
    addressDetail.val = address.val;
    addressDetail.city = address.city;
    addressDetail.state = address.state;
    addressDetail.country = address.country;
    addressDetail.pincode = address.pincode;
    return addressDetail;
  } else {
    return addressDetail;
  }
};

// {
//     "currentUserValues": {
//         "balancedLeaves": 0,
//         "leavesTaken": 4,
//         "salary": 0,
//         "isDeleted": false,
//         "_id": "60af9f867bb18d0015ae0eaa",
//         "name": "user one",
//         "gender": "Male",
//         "dob": "1996-03-20T18:30:00.000Z",
//         "email": "userone@gmail.com",
//         "phoneNo": "9782807283",
//         "designation": {
//             "_id": "609d85e1d5e64744f590466c",
//             "name": "Bussiness Analyst"
//         },
//         "department": {
//             "_id": "609d846248eb3644921745fe",
//             "name": "Admin Department"
//         },
//         "role": {
//             "_id": "609d86f1f17c70454004af1c",
//             "name": "Employee"
//         },
//         "joiningDate": "2021-05-26T13:29:00.000Z",
//         "personalEmail": "userone@gmail.com",
//         "account": {
//             "_id": "60af9f867bb18d0015ae0ea9",
//             "accountNo": "123456789",
//             "ifscCode": "SBIN008215",
//             "bankName": "STATE BANK OF INDIA"
//         },
//         "address": {
//             "isDeleted": false,
//             "_id": "60af9f867bb18d0015ae0ea8",
//             "val": "use one some where on planet",
//             "city": "jaipur",
//             "pincode": "302016",
//             "state": {
//                 "_id": "609faa3bd3fd4869f701b90d",
//                 "name": "Rajasthan",
//                 "code": "RJ",
//                 "country": "609faa35d3fd4869f701b328"
//             },
//             "country": {
//                 "_id": "609faa35d3fd4869f701b328",
//                 "name": "India",
//                 "code": "IN"
//             },
//             "createdBy": "609d8ebb38b76f46a520ab9f",
//             "updatedBy": "609d8ebb38b76f46a520ab9f",
//             "createdAt": "2021-05-27T13:32:54.094Z",
//             "updatedAt": "2021-05-27T13:32:54.094Z"
//         },
//         "createdBy": "609d8ebb38b76f46a520ab9f",
//         "updatedBy": "609d8ebb38b76f46a520ab9f",
//         "probationEnd": "2021-08-26T13:29:00.000Z",
//         "createdAt": "2021-05-27T13:32:54.757Z",
//         "updatedAt": "2021-06-07T09:45:28.924Z"
//     }
// }
