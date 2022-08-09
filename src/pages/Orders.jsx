import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl shadow-xl'>
      <Header categorey='page'title='armaan'/>
      <GridComponent
      id='gridcomp'
      dataSource={ordersData}
      allowSorting>
        
       
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize ,Sort, ContextMenu, Filter,Page, ExcelExport, PdfExport, Edit]}/>
       
      </GridComponent>
    </div>
  )
}

export default Orders