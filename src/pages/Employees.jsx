import { GridComponent, ColumnsDirective, ColumnDirective,Search, Resize, Sort,Toolbar, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import React from 'react';
import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-xl'>
      <Header categorey='page'title='armaan'/>
      <GridComponent
      id='gridcomp'
      dataSource={employeesData}
      allowSorting
      toolbar={['Search']}>
        
       
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page,Search,Toolbar ]}/>
       
      </GridComponent>
    </div>
  )
}

export default Employees