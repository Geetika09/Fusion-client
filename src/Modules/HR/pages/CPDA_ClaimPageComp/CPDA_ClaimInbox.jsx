// src/Modules/HR/components/CPDA_ClaimInbox.js
import React from "react";

import Form from "../../components/FormComponent/Form"; // Adjust the import as needed

function CPDA_ClaimInbox() {
  const inboxData = [
    {
      formId: "101206",
      user: "Suresh Yadav",
      designation: "Professor",
      date: "01 October 2024",
    },
    {
      formId: "101207",
      user: "Amit Sharma",
      designation: "Professor",
      date: "05 October 2024",
    },
    {
      formId: "101205",
      user: "Rajesh Kumar",
      designation: "Professor",
      date: "07 November 2024",
    },
    {
      formId: "101204",
      user: "Vishal Kumar",
      designation: "Asst. Professor",
      date: "07 November 2024",
    },
    {
      formId: "101206",
      user: "Suresh Yadav",
      designation: "Professor",
      date: "01 October 2024",
    },
    {
      formId: "101207",
      user: "Amit Sharma",
      designation: "Professor",
      date: "05 October 2024",
    },
    {
      formId: "101208",
      user: "Mithilesh Lal Das",
      designation: "Asst. Professor",
      date: "09 November 2023",
    },
  ];
  return <Form title="CPDA Claim Inbox" data={inboxData} />;
}

export default CPDA_ClaimInbox;
