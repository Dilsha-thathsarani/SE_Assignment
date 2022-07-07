import React from "react";

export default function NoteList() {
  return (
    <div>
      <div className="py-4 container mt-5">
        <table class="table table-striped table-light">
          <thead class="thread-light">
            <tr style={{ textAlign: "center" }}>
              <th scope="col" className="col-2">
                Title
              </th>
              <th scope="col" className="col-2">
                Note
              </th>
              <th scope="col" className="col-2">
                Action
              </th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            <tr>
              <td className="py-5 ">5asjhdjhdfjsxdhe</td>
              <td className="py-5 ">gdfgbfbhgfnf</td>
              <td className="py-5 ">
                <a className="btn btn-warning  " href="/details">
                  <i className="fas fa-edit"></i>&nbsp;Edit
                </a>

                <a
                  className="btn btn-danger me-5"
                  style={{ marginLeft: "15%" }}
                  href="/delete"
                >
                  <i className="far fa-trash-alt"></i>&nbsp;Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
