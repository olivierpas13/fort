import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useState } from 'react';


const IssuesTable = () => {
  const [unresolvedIssues, setUnresolvedIssues] = useState([]);
  const [esolvedIssues, setResolvedIssues] = useState([]);
  const [ignoredIssues, setIgnoredIssues] = useState([]);

  const pageSize = 5;

  const People = [
    {
      id: '1',
      name: 'Alan Bello',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Planet of the Grapes',
      'company-image': 'grapes.png',
      levelOfHappiness: '30'
    },
    {
      id: '2',
      name: 'Alejandro Danza',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Lord of the Fries',
      'company-image': 'fries.png',
      levelOfHappiness: '100'
    },
    {
      id: '3',
      name: 'Sara Grecia',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Hurry Curry',
      'company-image': 'curry.png',
      levelOfHappiness: '50'
    },
    {
      id: '4',
      name: 'Ramon Llanura',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Eggcellent Eats',
      'company-image': 'eats.png',
      levelOfHappiness: '100'
    },
    {
      id: '5',
      name: 'Alejandro Pedros',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Thai Tanic',
      'company-image': 'tanic.png',
      levelOfHappiness: '10'
    },
    {
      id: '6',
      name: 'Pablo Ducho',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Wok This Way',
      'company-image': 'way.png',
      levelOfHappiness: '97'
    },
    {
      id: '7',
      name: 'Samuel Glorias',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Sam and Ella',
      'company-image': 'ella.png',
      levelOfHappiness: '21'
    },
    {
      id: '8',
      name: 'Anna Higo',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Mustard’s Last Stand',
      'company-image': 'stand.png',
      levelOfHappiness: '10'
    },
    {
      id: '9',
      name: 'Janine Trovello',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Life of Pie',
      'company-image': 'pie.png',
      levelOfHappiness: '10'
    },
    {
      id: '10',
      name: 'Ricardo Lini',
      category: 'manager',
      'category-image': 'manager.png',
      company: 'Basic Kneads Pizza',
      'company-image': 'pizza.png',
      levelOfHappiness: '55'
    },
    {
      id: '11',
      name: 'Jayde Mccallum',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Earth Wind And Flour',
      'company-image': 'flour.png',
      levelOfHappiness: '56'
    },
    {
      id: '12',
      name: 'Sakina Tillman',
      category: 'employee',
      'category-image': 'employee.png',
      company: '9021 Pho',
      'company-image': 'pho.png',
      levelOfHappiness: '50'
    },
    {
      id: '13',
      name: 'Ashwin Andrews',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Sweet Cheezus',
      'company-image': 'cheezus.png',
      levelOfHappiness: '82'
    },
    {
      id: '14',
      name: 'Rheanna Gilmour',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Fishcoteque',
      'company-image': 'fishcoteque.png',
      levelOfHappiness: '23'
    },
    {
      id: '15',
      name: 'Joann Weiss',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Grill Em All',
      'company-image': 'emall.png',
      levelOfHappiness: '55'
    },
    {
      id: '16',
      name: 'Everett Medrano',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'A Cut Above',
      'company-image': 'above.png',
      levelOfHappiness: '50'
    },
    {
      id: '17',
      name: 'Duncan Gaines',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Fro-ternity',
      'company-image': 'ternity.png',
      levelOfHappiness: '45'
    },
    {
      id: '18',
      name: 'Inaya Cope',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'Jack the Clipper',
      'company-image': 'clipper.png',
      levelOfHappiness: '81'
    },
    {
      id: '19',
      name: 'Samad Emery',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'My Hair Lady',
      'company-image': 'lady.png',
      levelOfHappiness: '35'
    },
    {
      id: '20',
      name: 'Ellouise Hammond',
      category: 'employee',
      'category-image': 'employee.png',
      company: 'The Director’s Cut',
      'company-image': 'cut.png',
      levelOfHappiness: '56'
    }
  ];

  const colums = [
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   sortable: false,
    //   headerName: '',
    //   width: 50,
    //   // renderCell: (params) => (
    //   //   <>{<Checkbox size="small" checked={findPerson(params.row)} onChange={() => handleChange(params.row)} />}</>
    //   // )
    // },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      renderCell: (params) => <>{params.value}</>
    }
  ];

  return (
    <DataGrid
      rows={People}
      columns={colums}
      disableColumnSelector
      disableSelectionOnClick
      autoHeight
      pageSize={pageSize}
      rowsPerPageOptions={[pageSize]}
      getRowId={(row) => row.id}
    />
  );
};

export default IssuesTable;