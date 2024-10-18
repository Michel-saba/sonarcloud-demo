'use client';
import React, { useState } from 'react';
let data = [{id: 1, name: 'John', age: 25, active: true}, {id: 2, name: 'Doe', age: 30, active: false}];
export const DataTable=()=>{

  return(
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th> active</th>
          </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.active? 'active': 'not active'}</td>
          </tr>))
        }

      </tbody>
    </table>
  )
}
