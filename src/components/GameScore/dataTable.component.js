import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
 
const TABLE_COLUMNS = [{
  columns: [
    {
      Header: "Name",
      accessor: "name"
    },
    {
      Header: "Nationality",
      accessor: "nationality"
    }
    ,
    {
      Header: "Gender",
      accessor: "gender"
    }
    ,
    {
      Header: "Age",
      accessor: "age"
    }
    ,
    {
      Header: "Email",
      accessor: "email"
    }
    ,
    {
      Header: "Phone",
      accessor: "phone"
    }
    ,
    {
      Header: "Device Id",
      accessor: "deviceId"
    }
    ,
    {
      Header: "Score",
      accessor: "score"
    }
  ]
}];
 
const TABLE_DATA = [
  {
    name: 'Frozen yogurt',
    calories: '159',
    fat: '6.0',
    carbs: '24',
  }, {
    name: 'Ice cream sandwich',
    calories: '159',
    fat: '6.0',
    carbs: '24',
  },
];
 
export class GameDataTable extends Component {
  
  render() {
    const filteredData = this.props.scoresData.map((scoreData) => (
      {
        name: scoreData.name,
        nationality: scoreData.nationality,
        gender: scoreData.gender,
        age: scoreData.age,
        email: scoreData.email,
        phone: scoreData.phone,
        deviceId: scoreData.deviceId,
        score: scoreData.score
      }
    ));
  
  
    console.log('in filterd', filteredData);
    return (
      <ReactTable
        data={filteredData}
        columns={TABLE_COLUMNS}
        defaultPageSize={10}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]).indexOf(filter.value) > -1}
      />
    );
  }
}
