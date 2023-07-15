// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21;

import "./Roles.sol";

contract Contract {
  using Roles for Roles.Role;

  Roles.Role private admin;
  Roles.Role private doctor;

  struct Doctor {
    string name;
    address id;
    string speciality;
    uint256 experience;
    string drHash;
  }
  event DoctorAdded(address indexed _id, string _name, string _speciality, uint256 _exp, string _drInfo_hash);

  mapping(address => Doctor) Doctors;

  address[] public DrIDs;

  constructor() {
    admin.add(msg.sender);
  }

  //get Admin

  function isAdmin() public view returns (bool) {
    return admin.has(msg.sender);
  }

  //Add Doctor

  function addDrInfo(string memory _name,address dr_id,string memory _speciality,uint256 _exp, string memory _drInfo_hash) public {
    require(admin.has(msg.sender), "Only For Admin");

    Doctors[dr_id] = Doctor(_name, dr_id, _speciality, _exp, _drInfo_hash);
    DrIDs.push(dr_id);

    doctor.add(dr_id);
    emit DoctorAdded(dr_id, _name, _speciality, _exp, _drInfo_hash);
  }

  function getAllDrs() public view returns (address[] memory) {
    return DrIDs;
  }

  function getDr(address _id) public view returns (Doctor memory) {
    return Doctors[_id];
  }

  function isDr(address id) public view returns (bool) {
    return doctor.has(id);
  }

}
